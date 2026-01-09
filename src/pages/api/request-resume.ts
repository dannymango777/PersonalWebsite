import type { APIRoute } from 'astro';
import { resumeConfig } from '../../config';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { requestId, userAgent, timestamp } = await request.json();

    // Send notification via ntfy.sh
    const notificationResponse = await fetch(`https://ntfy.sh/${resumeConfig.notificationTopic}`, {
      method: 'POST',
      body: JSON.stringify({
        topic: resumeConfig.notificationTopic,
        title: 'Resume Access Request',
        message: `Resume access requested\nRequest ID: ${requestId}\nUser Agent: ${userAgent}\nTime: ${new Date(timestamp).toLocaleString()}`,
        priority: 4,
        tags: ['document', 'eyes'],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (notificationResponse.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Notification sent' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to send notification' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
