import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.URL!,
      lastModified: new Date(),
      //   changeFrequency: 'yearly',
      //   priority: 1,
    },
    {
      url: `${process.env.URL}admin`,
      lastModified: new Date(),
      //   changeFrequency: 'monthly',
      //   priority: 0.8,
    },
  ];
}
