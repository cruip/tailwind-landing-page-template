"use client";

import { useState } from "react";
import TrainerCard from "./TrainerCard";
import { useTranslations } from "next-intl";

export default function TrainersSection() {
  const t = useTranslations("home.trainers");

  const trainers = [
    { name: t("trainer1.name"), title: t("trainer1.title") },
    { name: t("trainer2.name"), title: t("trainer2.title") },
    { name: t("trainer3.name"), title: t("trainer3.title") },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-gray-900 py-12 md:py-24">
      {/* Red gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-600/20 to-transparent"></div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-[32px] font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {t("headline")}
          </h2>
        </div>

        {/* Trainer Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
              aria-label="Previous trainer"
            >
              ←
            </button>

            {/* Trainer Cards */}
            <div className="flex items-center justify-center gap-6">
              {trainers.map((trainer, index) => {
                const isActive = index === currentIndex;
                const isVisible =
                  index === currentIndex ||
                  index === currentIndex - 1 ||
                  index === currentIndex + 1 ||
                  (currentIndex === 0 && index === trainers.length - 1) ||
                  (currentIndex === trainers.length - 1 && index === 0);

                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "scale-110 z-20"
                        : "scale-90 opacity-60 z-10"
                    }`}
                  >
                    <TrainerCard
                      name={trainer.name}
                      title={trainer.title}
                      className="w-[280px]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
              aria-label="Next trainer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
