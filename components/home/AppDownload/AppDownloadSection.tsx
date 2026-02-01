"use client";

import { useTranslations } from "next-intl";
import OptimizedImage from "@/components/common/Image/OptimizedImage";

export default function AppDownloadSection() {
  const t = useTranslations("home.appDownload");

  const partners = ["Grab", "ShopeeFood", "beFood"];

  return (
    <section className="relative overflow-hidden bg-[#b3262d] py-12 md:py-24">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=1600&q=60"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b3262d]/40 to-[#7a191c]/50" />
      </div>

      <div className="layout-content relative">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,486px)_1fr] lg:items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-white">
            <div className="space-y-3">
              <p className="text-[16px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {t("eyebrow")}
              </p>
              <h2 className="text-[32px] font-semibold leading-tight md:text-[48px]">
                {t("headline")}
              </h2>
            </div>
            <p className="text-base leading-[150%] text-red-50 md:text-lg md:leading-[150%] lg:text-xl">
              {t("description")}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                App Store
              </button>
              <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Google Play
              </button>
            </div>

            {/* Partnership Logos */}
            <div className="flex flex-wrap items-center gap-4 pt-6 md:gap-6 md:pt-8">
              <span className="text-sm text-red-100">{t("availableOn")}</span>
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mobile App Mockups */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4">
              {/* First phone - angled */}
              <div className="relative z-10 -rotate-12 transform">
                <div className="h-[400px] w-[200px] rounded-[3rem] border-8 border-gray-800 bg-gray-900 p-4 shadow-2xl md:h-[500px] md:w-[250px]">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                      alt="App preview"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 250px, 200px"
                    />
                  </div>
                </div>
              </div>
              {/* Second phone - overlapping */}
              <div className="relative -ml-8 rotate-12 transform">
                <div className="h-[400px] w-[200px] rounded-[3rem] border-8 border-gray-800 bg-gray-900 p-4 shadow-2xl md:h-[500px] md:w-[250px]">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
                      alt="App preview"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 250px, 200px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
