"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";
import { useTranslations } from "next-intl";

export default function MenuSection() {
  const t = useTranslations("home.menu");

  const menuItems = [
    { title: "Cacao Whey", size: "300ml" },
    { title: "Matcha Oats Whey", size: "400ml" },
    { title: "Berry Bowl", size: "350ml" },
    { title: "Green Detox", size: "300ml" },
    { title: "Orange Juice", size: "250ml" },
    { title: "Protein Bites", size: "100g" },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, menuItems.length - itemsPerView);

  const goToPrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="layout-content">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
            <p className="text-base leading-[150%] text-gray-600 md:text-lg md:leading-[150%] lg:text-xl">
              {t("description")}
            </p>
            <div className="pt-2 md:pt-4">
              <Button variant="primary" size="lg">
                {t("cta")}
              </Button>
            </div>
          </div>

          {/* Right: Product Carousel */}
          <div className="relative">
            <div className="mb-4 flex items-center justify-between md:mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {t("carouselTitle")}
              </h3>
              {/* Carousel Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-50"
                  aria-label="Previous products"
                >
                  ←
                </button>
                <button
                  onClick={goToNext}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-50"
                  aria-label="Next products"
                >
                  →
                </button>
              </div>
            </div>
            <ProductCarousel>
              {menuItems.map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.title}
                  price={item.size}
                  className="min-w-[280px] flex-shrink-0"
                />
              ))}
            </ProductCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
