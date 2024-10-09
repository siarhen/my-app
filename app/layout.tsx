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
              url: 'https://cdn.devreality.ru/assets/466.jpg',
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
      "https://cdn.devreality.ru/assets/466.jpg",
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
