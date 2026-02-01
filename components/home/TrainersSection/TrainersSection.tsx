"use client";

import TrainerCard from "./TrainerCard";
import { useTranslations } from "next-intl";

const trainerImages = [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
];

export default function TrainersSection() {
  const t = useTranslations("home.trainers");

  const trainers = [
    { name: t("trainer1.name"), title: t("trainer1.title"), image: trainerImages[0] },
    { name: t("trainer2.name"), title: t("trainer2.title"), image: trainerImages[1] },
    { name: t("trainer3.name"), title: t("trainer3.title"), image: trainerImages[2] },
  ];

  return (
    <section className="relative overflow-hidden bg-[#141719] py-16 md:py-24">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#c1272d]/40 to-transparent" />
      <div className="layout-content relative">
        <div className="mb-12 text-center">
          <h2 className="text-[32px] font-semibold leading-tight text-[#fdf9f3] md:text-[48px]">
            {t("headline")}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <TrainerCard
            name={trainers[0].name}
            title={trainers[0].title}
            imageUrl={trainers[0].image}
            className="w-[220px] -rotate-12 md:w-[260px] lg:w-[300px]"
          />
          <TrainerCard
            name={trainers[1].name}
            title={trainers[1].title}
            imageUrl={trainers[1].image}
            className="w-[240px] md:w-[280px] lg:w-[320px]"
          />
          <TrainerCard
            name={trainers[2].name}
            title={trainers[2].title}
            imageUrl={trainers[2].image}
            className="w-[220px] rotate-12 md:w-[260px] lg:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
