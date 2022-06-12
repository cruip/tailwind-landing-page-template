import React, { useState } from "react";

import CouplerHeroImage from "../images/coupler-hero.png";
import ApplicationForm from "./ApplicationForm";

function CouplerHero() {
  return (
    <section className="relative">
      {/* Hero content */}
      <div className="bg-couplerBg bg-[url('/src/images/coupler-bg.png')] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-couplerTitle">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="pb-12 md:pb-16 md:grid md:grid-cols-12 md:gap-6">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:mt-6"
                data-aos="fade-right"
              >
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Coupler
                </h1>

                <div className="max-w-3xl">
                  <p
                    className="text-md md:text-lg mb-8 text-gray-600 font-inter"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Coupler is an online platform that aims to increase business
                    opportunities with startups and investors.
                  </p>
                  <img src={CouplerHeroImage} width="532" height="553" />
                </div>
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0 md:order-1 flex flex-col justify-center"
                data-aos="zoom-y-out"
              >
                <p
                  className="text-sm md:text-md text-gray-600 font-inter mb-2"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Please fill your email adrees and click the generate button.
                  And we well generate the code for your space.
                </p>
                <p
                  className="mb-2 text-sm text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  *Please use laptop to try our platform, mobile doesn’t work at
                  the moment.
                </p>
                <div className="flex justify-center mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 19H22M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V16H4V7Z"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V4C18 2.89543 17.1046 2 16 2Z"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9492 18H12.0492"
                      stroke="#4B4B4B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="2.09957"
                      y1="21.6464"
                      x2="21.2925"
                      y2="2.45355"
                      stroke="#4B4B4B"
                    />
                  </svg>
                </div>
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CouplerHero;
