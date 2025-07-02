import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { id, data } = await req.json();

  // Save with 24h expiry (in seconds)
  await kv.set(`paste:${id}`, JSON.stringify(data), { ex: 86400 });

  return new Response(JSON.stringify({ success: true }));
}
