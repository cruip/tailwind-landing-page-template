export const metadata = {
  title: "DongA Corp",
  description: "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <Cta />
    </>
  );
}
