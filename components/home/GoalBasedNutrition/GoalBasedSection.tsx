"use client";

import Button from "@/components/ui/Button/Button";
import GoalCard from "./GoalCard";
import { useTranslations } from "next-intl";

const GOAL_KEYS = [
  "muscleGain",
  "recovery",
  "energy",
  "weightLoss",
  "wellness",
] as const;

export default function GoalBasedSection() {
  const t = useTranslations("home.goalBased");

  const goals = GOAL_KEYS.map((key) => ({
    title: t(`goals.${key}`),
    imageKey: key,
  }));

  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24 lg:py-32">
      {/* Radiant red-orange gradient from middle-left */}
      <div
        className="pointer-events-none absolute -left-[20%] top-1/2 h-[120%] w-[70%] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.3)_0%,rgba(185,28,28,0.15)_40%,transparent_70%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-red-900/25 via-red-800/10 to-transparent"
        aria-hidden
      />

      <div className="layout-content relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-[32px] font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
            <p className="max-w-[480px] text-base leading-[150%] text-gray-300 md:text-lg md:leading-[150%] lg:text-xl">
              {t("description")}
            </p>
            <div className="pt-2 md:pt-4">
              <Button variant="primary" size="lg" className="h-14 rounded-2xl">
                {t("cta")}
              </Button>
            </div>
          </div>

          {/* Right: Staggered Goal Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Muscle Gain - top, spans more */}
              <div className="col-span-2 md:col-span-1 md:pr-8">
                <GoalCard title={goals[0].title} imageKey={goals[0].imageKey} />
              </div>
              {/* Recovery - middle left */}
              <div className="translate-y-4 md:translate-y-8 lg:translate-y-12">
                <GoalCard title={goals[1].title} imageKey={goals[1].imageKey} />
              </div>
              {/* Energy Boost - middle right */}
              <div className="-translate-y-2 translate-x-0 md:-translate-y-4 md:translate-x-4 lg:-translate-y-8 lg:translate-x-8">
                <GoalCard title={goals[2].title} imageKey={goals[2].imageKey} />
              </div>
              {/* Weight Loss - bottom left */}
              <div className="translate-y-2 md:translate-y-6 lg:translate-y-10">
                <GoalCard title={goals[3].title} imageKey={goals[3].imageKey} />
              </div>
              {/* Wellness - bottom right */}
              <div className="-translate-y-4 md:-translate-y-2 md:translate-x-4 lg:translate-x-8">
                <GoalCard title={goals[4].title} imageKey={goals[4].imageKey} />
              </div>
            </div>

            {/* Decorative circular text - bottom right */}
            <div
              className="absolute -bottom-4 -right-4 hidden h-32 w-32 md:block lg:-bottom-8 lg:-right-8 lg:h-40 lg:w-40"
              aria-hidden
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full -rotate-45 text-white/10"
                style={{ animation: "spin-slow 20s linear infinite" }}
              >
                <defs>
                  <path
                    id="goalCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-current text-[6px] font-bold uppercase tracking-wider">
                  <textPath href="#goalCirclePath" startOffset="0">
                    CHOOSE YOUR GOAL BASED • CHOOSE YOUR GOAL BASED •{" "}
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
