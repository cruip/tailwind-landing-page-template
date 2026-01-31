"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";
import HeroBg from "@/public/images/hero-image-bg.webp";

export default function HeroContent() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative z-10 flex min-h-[600px] flex-col justify-start md:min-h-[800px] lg:min-h-[844px]">
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

      {/* Content — Figma: 1440x844px, left-aligned, vertical layout */}
      <div className="layout-content flex flex-1 flex-col pt-[164px] pb-[68px]">
        <div>
          {/* Headlines — "Blend with purpose" + "Fuel your lifestyle" vertical stack */}
          <div className="mb-4 max-w-[910px] p-0 md:mb-[43px]" data-aos="fade-up">
            <h1 className="text-[40px] font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {t("blend_with_purpose")}
            </h1>
          </div>

          <h2
            className="mb-6 max-w-[910px] text-[40px] font-bold leading-tight text-white md:mb-8 md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {t("fuel_your_lifestyle")}
          </h2>

          {/* Sub-headline — below headlines, left-aligned */}
          <p
            className="max-w-[280px] text-base font-normal leading-[150%] text-white md:text-lg md:leading-[150%]"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {t("description")}
          </p>
        </div>

        {/* CTA Button — centered, 12px from bottom of hero */}
        <div
          className="mt-auto flex justify-center pb-[12px]"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <Button variant="primary" size="lg" className="h-[56px] rounded-2xl">
            {t("blend_now")}
          </Button>
        </div>
      </div>
    </div>
  );
}
