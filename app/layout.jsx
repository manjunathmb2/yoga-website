import './globals.css';
import { site } from '../site.config';

export const metadata = {
  metadataBase: new URL(site.domain),
  title: `${site.teacherName} — Online Yoga Classes in ${site.city}`,
  description: `Learn yoga online with ${site.teacherName}. Beginner to advanced classes, prenatal yoga, and stress relief. Book a free trial class today.`,
  keywords: [
    `online yoga classes ${site.city}`,
    'yoga for beginners',
    'online yoga teacher',
    'prenatal yoga online',
    'yoga for stress relief',
    `yoga teacher ${site.city}`,
  ],
  openGraph: {
    title: `${site.teacherName} — Online Yoga Classes`,
    description: `Beginner-friendly online yoga. Book a free trial class with ${site.teacherName}.`,
    url: site.domain,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  // Structured data helps Google understand it's a local business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: `${site.teacherName} Yoga`,
    description: `Online yoga classes with ${site.teacherName}`,
    areaServed: site.city,
    url: site.domain,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
