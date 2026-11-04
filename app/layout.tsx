import "./css/style.css";

import { Inter } from "next/font/google";

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
      <body
        className={`${inter.variable} font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/*
          Scroll restoration fix — must run before React hydration:
          1. Disable browser scroll restoration (prevents the browser restoring a previous position)
          2. Instant scroll-to-top (no animation, so no visible jump)

          IMPORTANT: The wrapper below uses [overflow-x:clip], NOT overflow-hidden.
          overflow-hidden on any ancestor breaks position:sticky inside the hero.
          Do not change this to overflow-hidden or overflow-clip (both axes).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'history.scrollRestoration="manual";window.scrollTo({top:0,behavior:"instant"});',
          }}
        />
        <div className="flex min-h-screen flex-col [overflow-x:clip]">
          {children}
        </div>
      </body>
    </html>
  );
}
