"use client";

import Button from "@/components/ui/Button/Button";
import GoalCard from "./GoalCard";
import { useTranslations } from "next-intl";

export default function GoalBasedSection() {
  const t = useTranslations("home.goalBased");

  const goals = [
    { title: t("goals.muscleGain") },
    { title: t("goals.weightLoss") },
    { title: t("goals.recovery") },
    { title: t("goals.wellness") },
    { title: t("goals.energy") },
    { title: t("goals.viewAll") },
  ];

  return (
    <section className="relative bg-gray-900 py-12 md:py-24">
      {/* Red gradient from left */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-red-600/20 to-transparent"></div>
      
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
            <p className="text-base leading-[150%] text-gray-300 md:text-lg md:leading-[150%] lg:text-xl">
              {t("description")}
            </p>
            <div className="pt-2 md:pt-4">
              <Button variant="primary" size="lg">
                {t("cta")}
              </Button>
            </div>
          </div>

          {/* Right: Goal Cards Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {goals.map((goal, index) => (
              <GoalCard
                key={index}
                title={goal.title}
                className={index === 5 ? "border-2 border-dashed border-gray-400" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
