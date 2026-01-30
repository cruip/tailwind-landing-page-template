"use client";

import Button from "@/components/ui/Button/Button";
import MobilePreview from "./MobilePreview";
import { useTranslations } from "next-intl";

export default function ComboSection() {
  const t = useTranslations("home.combo");

  return (
    <section className="relative bg-white py-12 md:py-24">
      {/* Subtle red gradients on sides */}
      <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-red-50 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-red-50 to-transparent"></div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Mobile App Mockups */}
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

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              {t("headline1")}
            </h2>
            <h3 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
              {t("headline2")}
            </h3>
            <p className="text-base leading-[150%] text-gray-600 md:text-lg md:leading-[150%] lg:text-xl">
              {t("description")}
            </p>
            <div className="pt-2 md:pt-4">
              <Button variant="primary" size="lg">
                {t("cta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
