import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mockManga",
  description: "A web application that generates mock or fake data for testing can be a valuable tool for developers and testers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
          <Script id="ga4-script1"
            strategy="afterInteractive" // Recommended for GTM
            src="https://www.googletagmanager.com/gtag/js?id=G-3DV7C2ZQFS"
          />
          <Script id="ga-script2"
            strategy="afterInteractive" // Recommended for GTM
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3DV7C2ZQFS');
          `,
            }}
          />
          {/* Your component content */}
        </div>
        {children}
      </body>
    </html>
  );
}
