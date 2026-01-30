"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";
import HeroBg from "@/public/images/hero-image-bg.webp";

export default function HeroContent() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative z-10 flex min-h-[600px] flex-col justify-start md:min-h-[800px] lg:min-h-[900px]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroBg}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Content — flex-1 so CTA sits 12px from bottom of hero (above bottom bar) */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 pt-[164px] pb-[68px] sm:px-6 lg:px-8">
        <div className="ml-[120px] text-left">
          {/* "Blend with purpose" — W=910px, padding=0, 43px gap to row below */}
          <div className="mb-4 max-w-[910px] p-0" data-aos="fade-up">
            <h1 className="text-[40px] font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {t("blend_with_purpose")}
            </h1>
          </div>

          {/* Row: description (left) + 130px gap + "Fuel your lifestyle" (right), top-aligned */}
          <div className="flex flex-wrap items-start gap-[130px]">
            <p
              className="mb-[13px] w-[280px] max-w-[280px] text-base font-normal leading-[150%] text-white md:text-lg md:leading-[150%]"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {t("description")}
            </p>
            <h2
              className="shrink-0 text-[40px] font-bold leading-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {t("fuel_your_lifestyle")}
            </h2>
          </div>
        </div>

        {/* CTA Button - height 56px, 12px from bottom of hero */}
        <div
          className="mt-auto flex justify-center pb-[12px]"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <Button variant="primary" size="lg" className="h-[56px]">
            {t("blend_now")}
          </Button>
        </div>
      </div>

      {/* Bottom Bar with Features */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-gray-700/50 bg-gray-900/90 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 text-sm text-white md:gap-8">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              {t("feature1")}
            </span>
            <span className="hidden text-gray-600 md:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              {t("feature2")}
            </span>
            <span className="hidden text-gray-600 md:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              {t("feature3")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
