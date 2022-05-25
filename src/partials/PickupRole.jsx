import React, { useState } from "react";

import CouplerRoleImage from "../images/coupler-role.png";

function PickupRole() {
  return (
    <section className="relative">
      {/* Hero content */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-couplerTitle">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="pb-12 md:pb-16 md:grid md:grid-cols-12 md:gap-6">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:mt-6"
                data-aos="fade-right"
              >
                <h1
                  className="text-2xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 text-brown"
                  data-aos="zoom-y-out"
                >
                  Pickup your role
                </h1>

                <div className="max-w-3xl">
                  <p
                    className="text-sm md:text-md mb-8 text-gray-600 font-inter"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Please fill your email adrees and click the generate button.
                    And we well generate the code for you to the space.
                  </p>
                </div>
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0 md:order-1 flex flex-col justify-center"
                data-aos="zoom-y-out"
              >
                <img src={CouplerRoleImage} width="545" height="396" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickupRole;
