import { site } from '../site.config';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
