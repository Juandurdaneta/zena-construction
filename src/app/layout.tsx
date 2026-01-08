import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zena Construction | Houston's Trusted Roofing & Construction Partner",
  description:
    "Transform your property into your best investment without contractor nightmares, budget surprises, or buyer's remorse. Free property evaluations valued at $1,200. IICRC Certified with 10+ years experience.",
  keywords: [
    "Houston roofing",
    "Houston construction",
    "roof repair Houston",
    "storm damage restoration",
    "property evaluation",
    "Houston contractor",
    "roofing company Houston TX",
  ],
  authors: [{ name: "Zena Construction" }],
  openGraph: {
    title: "Zena Construction | Houston's Trusted Construction Partner",
    description:
      "Transform your property into your best investment. Free property evaluations valued at $1,200.",
    type: "website",
    locale: "en_US",
    siteName: "Zena Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zena Construction | Houston's Trusted Construction Partner",
    description:
      "Transform your property into your best investment. Free property evaluations valued at $1,200.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXKJFD9T');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
        <style>{`
          :root {
            --font-dm-sans: 'DM Sans', system-ui, sans-serif;
            --font-playfair: 'Playfair Display', Georgia, serif;
          }
        `}</style>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXKJFD9T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
