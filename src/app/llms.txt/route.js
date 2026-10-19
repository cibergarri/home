// A short summary of who Javier Garrido is, with links to the full profile. See src/content/llms.js.
import { buildLlmsTxt } from '@/content/llms';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsTxt('en'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
