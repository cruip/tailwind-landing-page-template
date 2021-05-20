import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div>
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-blue-200 pointer-events-none" aria-hidden="true"></div>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        {/*<FeaturesBlocks />
        <Testimonials />
        <Newsletter />*/}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
