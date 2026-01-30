import Link from "next/link";
import FooterLogo from "./footer-logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            {/* Column 1: Goodblend */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-500">Goodblend</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#about" className="text-gray-300 transition hover:text-white">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="#app" className="text-gray-300 transition hover:text-white">
                    App & Membership
                  </Link>
                </li>
                <li>
                  <Link href="#partnership" className="text-gray-300 transition hover:text-white">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-gray-300 transition hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#stores" className="text-gray-300 transition hover:text-white">
                    Chi nhánh cửa hàng
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 transition hover:text-white">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Menu */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-500">Menu</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#whey" className="text-gray-300 transition hover:text-white">
                    Smoothies Whey
                  </Link>
                </li>
                <li>
                  <Link href="#healthy" className="text-gray-300 transition hover:text-white">
                    Smoothies Healthy
                  </Link>
                </li>
                <li>
                  <Link href="#bowl" className="text-gray-300 transition hover:text-white">
                    Smoothies Bowl
                  </Link>
                </li>
                <li>
                  <Link href="#detox" className="text-gray-300 transition hover:text-white">
                    Detox
                  </Link>
                </li>
                <li>
                  <Link href="#juice" className="text-gray-300 transition hover:text-white">
                    Nước ép
                  </Link>
                </li>
                <li>
                  <Link href="#bites" className="text-gray-300 transition hover:text-white">
                    Bites
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Chính sách */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-500">Chính sách</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#privacy" className="text-gray-300 transition hover:text-white">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link href="#shipping" className="text-gray-300 transition hover:text-white">
                    Vận chuyển & Giao nhận
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-gray-300 transition hover:text-white">
                    Điều kiện giao dịch
                  </Link>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="mt-8 flex gap-4">
                <Link
                  href="#facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="#instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="#linkedin"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="#tiktok"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
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
