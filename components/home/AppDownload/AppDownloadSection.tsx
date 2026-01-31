"use client";

import StoreButtons from "./StoreButtons";
import { useTranslations } from "next-intl";

export default function AppDownloadSection() {
  const t = useTranslations("home.appDownload");

  const partners = [
    { name: "Grab", logo: "🚗" },
    { name: "befood", logo: "🍔" },
  ];

  return (
    <section className="relative bg-red-600 py-12 md:py-24">
      {/* Dark gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/20 to-transparent"></div>

      <div className="layout-content relative">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-white">
            <h2 className="text-[32px] font-bold leading-tight md:text-5xl lg:text-6xl">
              {t("headline")}
            </h2>
            <p className="text-base leading-[150%] text-red-50 md:text-lg md:leading-[150%] lg:text-xl">
              {t("description")}
            </p>

            {/* App Store Buttons */}
            <div className="pt-2 md:pt-4">
              <StoreButtons />
            </div>

            {/* Partnership Logos */}
            <div className="flex flex-wrap items-center gap-4 pt-6 md:gap-6 md:pt-8">
              <span className="text-sm text-red-100">{t("availableOn")}</span>
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="font-semibold text-white">
                    {partner.name}
                  </span>
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
                  {/* Placeholder - gray/blue view */}
                  <div className="h-full w-full rounded-2xl bg-gray-700">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <div className="text-center">
                        <div className="mb-2 text-2xl">📱</div>
                        <div className="text-xs">App Screen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second phone - overlapping */}
              <div className="relative -ml-8 rotate-12 transform">
                <div className="h-[400px] w-[200px] rounded-[3rem] border-8 border-gray-800 bg-gray-900 p-4 shadow-2xl md:h-[500px] md:w-[250px]">
                  {/* Placeholder - gray/blue view */}
                  <div className="h-full w-full rounded-2xl bg-gray-700">
                    <div className="flex h-full items-center justify-center text-white/30">
                      <div className="text-center">
                        <div className="mb-2 text-2xl">📱</div>
                        <div className="text-xs">App Screen</div>
                      </div>
                    </div>
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
