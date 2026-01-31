import Link from "next/link";
import FooterLogo from "@/components/ui/footer-logo";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const goodblendLinks = [
  { href: "#about", label: "Về chúng tôi" },
  { href: "#app", label: "App & Membership" },
  { href: "#partnership", label: "Partnership" },
  { href: "#careers", label: "Careers" },
  { href: "#stores", label: "Chi nhánh cửa hàng" },
  { href: "#contact", label: "Liên hệ" },
];

const menuLinks = [
  { href: "#whey", label: "Smoothies Whey" },
  { href: "#healthy", label: "Smoothies Healthy" },
  { href: "#bowl", label: "Smoothies Bowl" },
  { href: "#detox", label: "Detox" },
  { href: "#juice", label: "Nước ép" },
  { href: "#bites", label: "Bites" },
];

const policyLinks = [
  { href: "#privacy", label: "Chính sách bảo mật" },
  { href: "#shipping", label: "Vận chuyển & Giao nhận" },
  { href: "#terms", label: "Điều kiện giao dịch" },
];

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="layout-content">
        {/* Top area: Newsletter and Navigation */}
        <div className={`grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 ${border ? "border-t border-gray-800" : ""}`}>
          {/* Newsletter Section - Left */}
          <div className="space-y-6 lg:col-span-5">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Đăng ký để được nhận sớm nhất các thông tin & ưu đãi từ{" "}
              <span className="text-orange-500">Goodblend!</span>
            </h2>

            {/* Email Input */}
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
              <button
                type="submit"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition hover:bg-gray-700 sm:w-auto sm:rounded-lg sm:px-6"
                aria-label="Submit"
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-gray-700 bg-gray-800 text-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                Tôi đồng ý với các{" "}
                <Link href="#terms" className="text-gray-400 underline hover:text-white">
                  điều khoản
                </Link>{" "}
                và{" "}
                <Link href="#policy" className="text-gray-400 underline hover:text-white">
                  chính sách
                </Link>{" "}
                từ Goodblend.
              </label>
            </div>
          </div>

          {/* Navigation Section - Right */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <FooterLinks title="Goodblend" links={goodblendLinks} />
            <FooterLinks title="Menu" links={menuLinks} />
            <div className="space-y-4">
              <FooterLinks title="Chính sách" links={policyLinks} />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Big text - Footer Logo */}
      <div className="relative mt-12 w-full py-8 md:py-0 md:h-80 lg:h-96" aria-hidden="true">
        {/* Mobile: Relative positioning with padding to prevent clipping */}
        <div className="pointer-events-none relative mx-auto w-full px-4 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-screen md:px-0">
          <div className="[&_svg]:opacity-60 [&_svg_path]:fill-gray-300 [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full">
            <FooterLogo className="w-full h-auto" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
