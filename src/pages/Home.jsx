import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import WhyNow from "../partials/WhyNow";
import WhoWeAre from "../partials/WhoWeAre";
import PromotionContent from "../partials/PromotionContent";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <WhyNow />
        <PromotionContent />
        <WhoWeAre />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
