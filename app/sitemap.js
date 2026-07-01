import { site } from '../site.config';

export default function sitemap() {
  return [
    {
      url: site.domain,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
