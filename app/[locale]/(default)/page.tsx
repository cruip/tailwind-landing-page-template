import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Goodblend - Blend with Purpose",
  description: "Khám phá Goodblend - nền tảng functional nutrition hàng đầu với các sản phẩm smoothies, healthy bowls, detox và đồ uống tốt cho sức khỏe. Blend with purpose.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
