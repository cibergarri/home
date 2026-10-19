import { SITE_URL } from '@/content/links';

export const dynamic = 'force-static';

// Everyone is welcome, AI crawlers included; the sitemap lists the pages.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
