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
  title: { default: 'metadata devreality test title' },
  description: 'metadata devreality test desctiption',
  robots: {
      index: true,
      follow: true,
  },
  icons: {
      icon: 'https://cdn.devreality.ru/assets/icon_DevReality.png',
  },
  openGraph: {
      title: 'metadata devreality test title',
      description: 'metadata devreality test desctiption',
      url: '123',
      siteName: 'devreality',
      images: [
          {
              url: 'https://cdn.devreality.ru/assets/logo_DevReality_black.png',
              alt: 'image alt',
              width: 1048,
              height: 1048,
          },
      ],
      type: 'website',
      manifest: `aa/manifest.json`,
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
