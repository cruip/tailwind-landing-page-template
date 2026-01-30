import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Goodblend - Blend with Purpose",
  description: "Khám phá Goodblend - nền tảng functional nutrition hàng đầu với các sản phẩm smoothies, healthy bowls, detox và đồ uống tốt cho sức khỏe. Blend with purpose.",
};

import HeroSection from "@/components/home/HeroSection/HeroSection";
import GoalBasedSection from "@/components/home/GoalBasedNutrition/GoalBasedSection";
import ComboSection from "@/components/home/ComboSection/ComboSection";
import TrainersSection from "@/components/home/TrainersSection/TrainersSection";
import AppDownloadSection from "@/components/home/AppDownload/AppDownloadSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <GoalBasedSection />
      <ComboSection />
      <TrainersSection />
      <AppDownloadSection />
    </>
  );
}
