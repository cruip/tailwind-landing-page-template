"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";
import HeroBg from "@/public/images/hero-image-bg.png";

export default function HeroContent() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative z-10 flex min-h-[600px] flex-col justify-center md:min-h-[800px] lg:min-h-[900px]">
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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-32 sm:px-6 lg:px-8 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Text Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <h1
                className="text-[40px] font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                data-aos="fade-up"
              >
                {t("headline1")}
              </h1>
              <h2
                className="text-[40px] font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                {t("headline2")}
              </h2>
            </div>
            
            <p
              className="max-w-lg text-base leading-[150%] text-gray-300 md:text-lg md:leading-[150%]"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {t("description")}
            </p>
          </div>

          {/* Right: Space for image - hình ảnh đã có trong background */}
          <div className="relative hidden lg:block">
            {/* Hình ảnh người và smoothie cups đã có trong background image */}
            <div className="relative aspect-[4/3]"></div>
          </div>
        </div>

        {/* CTA Button - Centered at bottom */}
        <div
          className="mt-8 flex justify-center md:mt-12"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <Button variant="primary" size="lg">
            {t("cta")}
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
