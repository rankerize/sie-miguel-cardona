import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

// Next.js App Router serves favicon.ico, icon.png, and apple-icon.png
// automatically from src/app/ — no explicit metadata needed for icons.
export const metadata: Metadata = {
  metadataBase: new URL("https://siediving.com"),
};

const GA_ID = "G-75EZQXR6T6";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
