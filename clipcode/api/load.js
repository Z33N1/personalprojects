import { kv } from '@vercel/kv';

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const paste = await kv.get(`paste:${id}`);

  return new Response(JSON.stringify(JSON.parse(paste)));
}
