export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesServices from "@/components/featuresservices";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import { Solutions } from "@/components/ui/solutions";

export default function Home() {
  return (

    <>
      <Hero />
      <FeaturesServices/>
      <Solutions />
      <LargeTestimonial />
      <Cta />
    </>

  );
}
