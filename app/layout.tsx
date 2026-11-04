import "./css/style.css";

import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "New Circuits — Navigating workplace change in the UK",
  description:
    "Practical guidance on job automation, re-skilling, and career change for people across the UK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #2563eb 100%)",
        minHeight: "100%",
      }}
    >
      {/*
        beforeInteractive injects into the initial HTML before hydration,
        so scroll restoration is disabled before the browser can restore position.
      */}
      <Script
        id="disable-scroll-restoration"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html:
            'history.scrollRestoration="manual";window.scrollTo({top:0,behavior:"instant"});',
        }}
      />
      <body
        className={`${inter.variable} font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/*
          [overflow-x:clip] only — not overflow-hidden / overflow-clip.
          Those break position:sticky used by the smooth-scroll hero.
        */}
        <div className="flex min-h-screen flex-col [overflow-x:clip]">
          {children}
        </div>
      </body>
    </html>
  );
}
