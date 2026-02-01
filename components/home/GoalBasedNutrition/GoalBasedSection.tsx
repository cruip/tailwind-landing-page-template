"use client";

import Button from "@/components/ui/Button/Button";
import GoalCard from "./GoalCard";
import { useTranslations } from "next-intl";
import GoalBasedBackground from "./GoalBasedBackground";

// Goals in Figma order: Muscle Gain (top), Recovery + Energy Boost (middle), Weight Loss + Wellness (bottom)
const goals = {
  muscleGain: {
    key: "muscleGain",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    titleColor: "accent" as const,
  },
  recovery: {
    key: "recovery",
    imageUrl:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&w=800&q=80",
    titleColor: "accent" as const,
  },
  energy: {
    key: "energy",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    titleColor: "accent" as const,
  },
  weightLoss: {
    key: "weightLoss",
    imageUrl:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80",
    titleColor: "accent" as const,
  },
  wellness: {
    key: "wellness",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    titleColor: "accent" as const,
  },
};

export default function GoalBasedSection() {
  const t = useTranslations("home.goalBased");

  return (
    <section className="relative overflow-hidden bg-[#141719]">
      <GoalBasedBackground />

      <div className="layout-content relative py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,492px)_1fr] lg:items-start lg:gap-16">
          <div className="space-y-8 text-[#fdf9f3]">
            <div className="space-y-6">
              <h2 className="text-[36px] font-semibold leading-tight md:text-[48px]">
                <span className="block">{t("titleLine1")}</span>
                <span className="block">{t("titleLine2")}</span>
              </h2>
              <p className="text-[16px] leading-[1.5] text-white/80">
                {t("description")}
              </p>
            </div>
            <Button variant="primary" size="lg">
              {t("cta")}
            </Button>
          </div>

          <div className="relative flex flex-col gap-6">
            {/* Row 1: Muscle Gain (centered) */}
            <div className="flex justify-center">
              <GoalCard
                title={t(`goals.${goals.muscleGain.key}`)}
                imageUrl={goals.muscleGain.imageUrl}
              />
            </div>

            {/* Row 2: Recovery + Energy Boost (gap 24px) */}
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <GoalCard
                title={t(`goals.${goals.recovery.key}`)}
                imageUrl={goals.recovery.imageUrl}
              />
              <GoalCard
                title={t(`goals.${goals.energy.key}`)}
                imageUrl={goals.energy.imageUrl}
              />
            </div>

            {/* Row 3: Weight Loss + Wellness (shifted left, gap 24px) */}
            <div className="flex flex-col items-center justify-start gap-6 md:-ml-[150px] md:flex-row">
              <GoalCard
                title={t(`goals.${goals.weightLoss.key}`)}
                imageUrl={goals.weightLoss.imageUrl}
              />
              <GoalCard
                title={t(`goals.${goals.wellness.key}`)}
                imageUrl={goals.wellness.imageUrl}
              />
            </div>

            {/* Circular text element */}
            <div
              className="absolute -bottom-6 -right-6 hidden h-40 w-40 md:block"
              aria-hidden
            >
              <svg viewBox="0 0 100 100" className="h-full w-full text-white">
                <defs>
                  <path
                    id="goalCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-current text-[8px] uppercase tracking-[0.32em]">
                  <textPath href="#goalCirclePath" startOffset="0">
                    CHOOSE YOUR GOAL BASED • CHOOSE YOUR GOAL BASED •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
