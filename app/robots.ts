import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/admin'],
      disallow: '/private/',
    },
    sitemap: `${process.env.URL}sitemap.xml`,
  };
}
