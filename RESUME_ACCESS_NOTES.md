# Resume Access Control Implementation Notes

## Current Implementation (Demo)

The resume access control system currently uses:
- **ntfy.sh** for sending push notifications to the owner's phone
- **localStorage** for demo approval checking (client-side only)

⚠️ **Important**: This is a demonstration implementation. The client-side localStorage check can be easily bypassed by users and provides no actual security.

## Production Implementation Recommendations

For a production-ready resume access control system, you should implement:

### 1. Backend State Management
Use a serverless database or KV store to track approval requests:
- **Vercel KV** (Redis-based, free tier available)
- **Upstash Redis** (serverless Redis)
- **Cloudflare KV** (key-value store)
- **Firebase Realtime Database**
- **Supabase** (PostgreSQL)

### 2. Server-Side Validation
Create API endpoints that validate access before serving the resume:

```typescript
// src/pages/api/approve-resume.ts
export const POST: APIRoute = async ({ request }) => {
  const { requestId, token } = await request.json();
  
  // Verify the token matches what was sent in notification
  // Store approval in KV store with expiration
  await kv.set(`resume-approval-${requestId}`, 'approved', { ex: 300 }); // 5 min expiry
  
  return new Response(JSON.stringify({ success: true }));
};

// src/pages/api/get-resume.ts
export const GET: APIRoute = async ({ url }) => {
  const requestId = url.searchParams.get('requestId');
  
  // Check if request is approved
  const approval = await kv.get(`resume-approval-${requestId}`);
  
  if (approval === 'approved') {
    // Generate a temporary signed URL or serve the PDF directly
    // Mark the approval as used to prevent reuse
    await kv.del(`resume-approval-${requestId}`);
    
    // Return the PDF or redirect to signed URL
    return new Response(pdfContent, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"'
      }
    });
  }
  
  return new Response('Access denied', { status: 403 });
};
```

### 3. Secure Approval Flow

1. **Request**: User requests access → generates unique request ID
2. **Notify**: Server sends notification with approval link containing:
   - Request ID
   - Verification token
   - Expiration timestamp
3. **Approve**: Owner clicks approve → calls server endpoint with token
4. **Validate**: Server validates token, stores approval in KV store
5. **Access**: Client polls server endpoint (not localStorage)
6. **Serve**: Server validates approval, serves PDF, invalidates token

### 4. Notification Service Setup

#### Using ntfy.sh (Free)

1. Choose a unique, hard-to-guess topic name
2. Subscribe to the topic on your phone using the ntfy app
3. Configure the approval webhook URL in the notification

```typescript
const approvalUrl = `https://yoursite.com/api/approve-resume?requestId=${requestId}&token=${token}`;

await fetch(`https://ntfy.sh/${topic}`, {
  method: 'POST',
  body: JSON.stringify({
    topic: topic,
    title: 'Resume Access Request',
    message: `Request from ${userAgent}`,
    click: approvalUrl,
    actions: [
      {
        action: 'http',
        label: 'Approve',
        url: approvalUrl,
        method: 'POST',
        clear: true
      }
    ]
  })
});
```

#### Using Pushover (Paid)

More reliable with webhook support and better delivery guarantees.

### 5. Additional Security Measures

- **Rate limiting**: Prevent spam requests
- **IP tracking**: Log requester IPs
- **CAPTCHA**: Add reCAPTCHA to prevent bots
- **Time-based tokens**: Tokens expire after 5 minutes
- **One-time use**: Tokens can only be used once
- **Audit log**: Track all access requests and approvals

## Environment Variables

```env
# .env
NTFY_TOPIC=your-secret-topic-name-12345
KV_REST_API_URL=https://your-kv-instance.upstash.io
KV_REST_API_TOKEN=your-kv-token
APPROVAL_SECRET=your-secret-for-token-generation
```

## Example: Full Vercel KV Implementation

```bash
# Install Vercel KV
npm install @vercel/kv
```

```typescript
// src/lib/kv.ts
import { kv } from '@vercel/kv';

export async function createApprovalRequest(requestId: string, data: any) {
  await kv.set(`resume-request-${requestId}`, JSON.stringify(data), { ex: 300 });
}

export async function approveRequest(requestId: string) {
  const request = await kv.get(`resume-request-${requestId}`);
  if (!request) return false;
  
  await kv.set(`resume-approval-${requestId}`, 'approved', { ex: 300 });
  return true;
}

export async function checkApproval(requestId: string): Promise<string | null> {
  return await kv.get(`resume-approval-${requestId}`);
}
```

## Cost Considerations

- **ntfy.sh**: Free for basic use
- **Vercel KV**: Free tier includes 256MB storage, 10K requests/day
- **Upstash Redis**: Free tier includes 10K requests/day
- **Cloudflare KV**: Free tier includes 100K reads/day, 1K writes/day

## Testing the System

1. Subscribe to your ntfy.sh topic on your phone
2. Click the resume link on the website
3. Receive notification on your phone
4. Click approve in the notification
5. User should see the resume

## Migration Path

To upgrade from the demo implementation:

1. Set up a KV store (Vercel KV recommended for simplicity)
2. Create the API endpoints (`approve-resume.ts`, `check-approval.ts`)
3. Update `resume-access.astro` to poll the API endpoint
4. Update notification to include approval webhook
5. Test the flow end-to-end
6. Remove localStorage fallback code
