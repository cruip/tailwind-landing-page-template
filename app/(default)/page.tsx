export const metadata = {
  title: "ESAA — Enterprise Search & AI Agents",
  description:
    "A self-hosted ChatGPT for your company that knows your documents, can use your business systems, and keeps your data inside your network.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import WhyEsaa from "@/components/why-esaa";
import FeaturesPlanet from "@/components/features-planet";
import Connectors from "@/components/connectors";
import Models from "@/components/models";
import Security from "@/components/security";
import WhoItsFor from "@/components/who-its-for";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <WhyEsaa />
      <FeaturesPlanet />
      <Connectors />
      <Models />
      <Security />
      <WhoItsFor />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
