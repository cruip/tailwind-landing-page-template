import "./css/style.css";

import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata = {
  title: "Goodblend - Blend with Purpose",
  description: "Goodblend là nền tảng về functional nutrition và smoothies, cung cấp các sản phẩm đồ uống tốt cho sức khỏe. Khám phá menu smoothies, healthy bowls, detox và nhiều hơn nữa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.variable} bg-gray-50 font-be-vietnam-pro tracking-tight text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
