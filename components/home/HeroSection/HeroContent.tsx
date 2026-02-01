"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";
import heroBg from "@/public/images/homepage-hero-bg.webp";

export default function HeroContent() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative z-10 flex min-h-[600px] flex-col justify-start md:min-h-[800px] lg:min-h-[844px]">
      {/* Hero Background Image — Figma: vignette (mép tối, giữa sáng) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Vignette overlay — dark edges, brighter center for text contrast */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,rgba(0,0,0,0)_55%,rgba(20,23,25,0.6)_80%,rgba(20,23,25,0.95)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141719]"
          aria-hidden
        />
      </div>

      {/* Content — Figma: 1440x844px, left-aligned, vertical layout */}
      <div className="layout-content flex flex-1 flex-col pt-[164px] pb-[56px]">
        <div>
          {/* "Blend with purpose" — 43px gap to row below */}
          <div className="max-w-[910px]" data-aos="fade-up">
            <h1 className="text-display-d3">
              {t("blend_with_purpose")}
            </h1>
          </div>

          {/* Desktop: description (trái) + 130px + "Fuel your lifestyle" (phải); mép trên hai khối thẳng hàng */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[130px]">
            <p
              className="text-heading-h4--regular m-0 max-w-[280px] order-2 md:order-1 md:pt-[43px]"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {t("description")}
            </p>
            <h2
              className="text-display-d3 m-0 max-w-[910px] text-right order-1 md:order-2 md:shrink-0"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {t("fuel_your_lifestyle")}
            </h2>
          </div>
        </div>

        {/* CTA Button — centered */}
        <div
          className="mt-auto flex justify-center"
          // data-aos="fade-up"
          // data-aos-delay={300}
        >
          <Button variant="primary" size="lg" className="h-[56px] rounded-2xl">
            {t("blend_now")}
          </Button>
        </div>
      </div>
    </div>
  );
}
