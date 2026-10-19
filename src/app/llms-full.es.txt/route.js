// The whole site as Markdown, in Spanish. See src/content/llms.js.
import { buildLlmsFull } from '@/content/llms';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsFull('es'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
