import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: { default: 'metadata 123 test title' },
  description: 'metadata 123 test desctiption',
  sitename: '123',
  type: 'website',
  // robots: {
  //     index: true,
  //     follow: true,
  // },
  icons: {
      icon: 'https://cdn.devreality.ru/assets/icon_DevReality.png',
  },
  openGraph: {
      title: 'metadata 123 test title',
      description: 'metadata 123 test desctiption',
      url: '123',
      siteName: '123',
      images: [
          {
              url: 'https://previews.dropbox.com/p/thumb/ACYtyuDgTSBeQe2LfIvsESd1H9w-K9IkezYmohI1su4P-uJhgbuMiudGkfjAUhj98RlPysGaGvaPQdCz46Ge0XmnYUJxVJnePcMQTFMbodVFkP4nMTIDRgJLyXjcPi0Z7iiM4mNd8oDiPw7WKAGuiD28PmXHM7_WZbHcQ5bYQ-WSm4YAD4E-x6nFJpE2Iv0ogaJSQ9ci5u1RVZYZbPYw8jzld67IgejBVjMCCxq6XwNgHYJbISfLlBv4rfGtJ5hbfUBku3UZlP1Wd456a4pnG6MqpzhRd25qjK2u-yNEmDadvrm2mhhRAoBN1KwhODwG_eTYf8_GBKfpx_VidTXQlHXN/p.png',
              alt: 'image alt',
          },
      ],
      type: 'website',
      manifest: `aa/manifest.json`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
    description:
      "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
    images: [
      "https://previews.dropbox.com/p/thumb/ACYtyuDgTSBeQe2LfIvsESd1H9w-K9IkezYmohI1su4P-uJhgbuMiudGkfjAUhj98RlPysGaGvaPQdCz46Ge0XmnYUJxVJnePcMQTFMbodVFkP4nMTIDRgJLyXjcPi0Z7iiM4mNd8oDiPw7WKAGuiD28PmXHM7_WZbHcQ5bYQ-WSm4YAD4E-x6nFJpE2Iv0ogaJSQ9ci5u1RVZYZbPYw8jzld67IgejBVjMCCxq6XwNgHYJbISfLlBv4rfGtJ5hbfUBku3UZlP1Wd456a4pnG6MqpzhRd25qjK2u-yNEmDadvrm2mhhRAoBN1KwhODwG_eTYf8_GBKfpx_VidTXQlHXN/p.png",
    ],
  },
  other: { 
      'yandex-verification': 'f07ec417a245b1c3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://qweqweqweqweq12312.netlify.app/#">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
