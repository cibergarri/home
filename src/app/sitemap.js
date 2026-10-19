import { SITE_URL } from '@/content/links';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/terminal`, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
