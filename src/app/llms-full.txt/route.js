// The whole site as Markdown, in English. See src/content/llms.js.
import { buildLlmsFull } from '@/content/llms';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsFull('en'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
