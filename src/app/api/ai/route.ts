import { NextRequest, NextResponse } from 'next/server';
import { gemini } from '@/lib/gemini/client';
import { pubsub } from '@/lib/pubsub';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  // send to gemini (stub)
  const result = await gemini
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContent(prompt);
  const message = result.response.text();
  await pubsub
    .topic('ai-results')
    .publishMessage({ data: Buffer.from(message) });
  return NextResponse.json({ ok: true });
}
