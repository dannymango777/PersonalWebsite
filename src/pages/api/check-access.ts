import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const requestId = url.searchParams.get('requestId');

  if (!requestId) {
    return new Response(
      JSON.stringify({ error: 'Missing requestId' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // In a real implementation, this would check a database or KV store
  // For demo purposes, we'll return a pending status
  // The approval would be handled through a separate approval endpoint
  
  return new Response(
    JSON.stringify({ 
      status: 'pending',
      requestId,
      message: 'Awaiting approval'
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
