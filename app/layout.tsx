import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "ESAA — Enterprise Search & AI Agents",
    template: "%s · ESAA",
  },
  description:
    "One private AI workspace for your company's knowledge, files and business systems. Self-hosted, with citations and the AI models you choose.",
  applicationName: "ESAA",
  keywords: [
    "enterprise search",
    "AI agents",
    "self-hosted AI",
    "RAG",
    "private ChatGPT",
    "knowledge base",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "ESAA — Enterprise Search & AI Agents",
    description:
      "A self-hosted ChatGPT for your company that knows your documents, can use your business systems, and keeps your data inside your network.",
    siteName: "ESAA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESAA — Enterprise Search & AI Agents",
    description:
      "One private AI workspace for your company's knowledge, files and business systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
