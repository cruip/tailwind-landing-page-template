"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button/Button";
import OptimizedImage from "@/components/common/Image/OptimizedImage";
import ProductCarousel from "./ProductCarousel";
import { ProductData } from "./ProductCard";

const products: ProductData[] = [
  {
    name: "Cacao Whey",
    ingredients: "Bột cacao, chuối, whey",
    calories: "302",
    carbs: "56G",
    protein: "14G",
    fat: "6G",
    imageSrc: "/images/cacao.png",
    isNew: true,
  },
  {
    name: "Mocha Cafe Whey",
    ingredients: "Cafe, bột cacao, chuối, whey",
    calories: "247",
    carbs: "48.3G",
    protein: "13G",
    fat: "1.4G",
    imageSrc: "/images/cacao.png",
  },
  {
    name: "Cải Kale Whey",
    ingredients: "Cải kale, xoài, đào, chuối, whey",
    calories: "210",
    carbs: "35G",
    protein: "13G",
    fat: "4G",
    imageSrc: "/images/cacao.png",
  },
  {
    name: "Almond Cafe Whey",
    ingredients: "Cafe, hạnh nhân, bột cacao, chuối, whey",
    calories: "255",
    carbs: "50G",
    protein: "13G",
    fat: "4G",
    imageSrc: "/images/cacao.png",
  },
  {
    name: "Việt Quất High Protein",
    ingredients: "Việt quất, chuối, yến mạch, whey",
    calories: "526",
    carbs: "89G",
    protein: "33G",
    fat: "9.7G",
    imageSrc: "/images/cacao.png",
  },
  {
    name: "Cacao High Protein",
    ingredients: "Bột cacao, chuối, yến mạch, whey",
    calories: "622",
    carbs: "111G",
    protein: "33.2G",
    fat: "11.3G",
    imageSrc: "/images/cacao.png",
  },
  {
    name: "Phộng High Protein",
    ingredients: "Bơ đậu phộng, chuối, yến mạch, whey",
    calories: "588",
    carbs: "99G",
    protein: "32.2G",
    fat: "15.8G",
    imageSrc: "/images/cacao.png",
  },
];

export default function MenuSection() {
  const t = useTranslations("home");
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const offset = direction === "left" ? -420 : 420;
    carouselRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#fcfcfc] py-12 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[320px] w-[260px] rotate-[-41deg] rounded-full bg-[#c1272d] opacity-70 blur-[190px]" />
      <div className="pointer-events-none absolute -left-40 bottom-[-120px] h-[320px] w-[260px] rotate-[-50deg] rounded-full bg-[#c1272d] opacity-70 blur-[190px]" />
      <div className="layout-content">
        <div className="relative px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-24">

          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative flex justify-center lg:w-1/2">
              <div className="relative flex items-center justify-center">
                <div className="relative z-10 -rotate-[10deg]">
                  <div className="h-[320px] w-[170px] rounded-[40px] border-[10px] border-[#1f1f1f] bg-[#111] p-2 shadow-2xl md:h-[420px] md:w-[220px]">
                    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#1a1a1a]">
                      
                    </div>
                  </div>
                </div>
                <div className="relative -ml-8 rotate-[10deg] md:-ml-10">
                  <div className="h-[320px] w-[170px] rounded-[40px] border-[10px] border-[#1f1f1f] bg-[#111] p-2 shadow-2xl md:h-[420px] md:w-[220px]">
                    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#1a1a1a]">
                      <OptimizedImage
                        src="/images/app-gb-screen-shot.png"
                        alt="Goodblend app menu"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 220px, 170px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-1/2">
              <p className="bg-gradient-to-r from-[#c1272d] to-[#f16464] bg-clip-text text-[16px] font-semibold uppercase tracking-[0.08em] text-transparent">
                {t("combo.badge")}
              </p>
              <div className="space-y-2">
                <h2 className="text-[36px] font-semibold leading-tight text-[#141719] md:text-[48px]">
                  {t("combo.headline1")}
                </h2>
                <h3 className="text-[36px] font-semibold leading-tight text-[#141719] md:text-[48px]">
                  {t("combo.headline2")}
                </h3>
              </div>
              <div className="space-y-4 text-[16px] leading-[1.5] text-[#505b66]">
                <p>{t("combo.description")}</p>
                <p>{t("combo.description2")}</p>
              </div>
              <div>
                <Button variant="primary" size="lg">
                  {t("combo.cta")}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 lg:mt-24">
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9] text-[#505b66] transition hover:border-[#c1272d] hover:text-[#c1272d]"
                aria-label="Scroll menu left"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9] text-[#505b66] transition hover:border-[#c1272d] hover:text-[#c1272d]"
                aria-label="Scroll menu right"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="flex flex-col gap-6 lg:w-[380px]">
                <h2 className="text-[32px] font-semibold text-[#141719] md:text-[40px]">
                  {t("menu.title")}
                </h2>
                <p className="text-[16px] leading-[1.5] text-[#505b66]">
                  {t("menu.description")}
                </p>
                <Button variant="primary" size="lg">
                  {t("menu.cta")}
                </Button>
              </div>
              <div className="flex-1">
                <ProductCarousel ref={carouselRef} products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
