import React, { useState } from "react";
import CouplerFoorterCurveImage from "../images/coupler-footer-curve.png";
import CouplerFooterPeopleImage from "../images/coupler-footer-people.png";
import ApplicationForm from "./ApplicationForm";

function TryItOut() {
  return (
    <section className="relative">
      {/* Hero content */}
      <div className="bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 text-couplerTitle">
          <div className="pt-16 pb-12 md:pt-24 md:pb-20">
            <div className="max-w-3xl">
              <p
                className="text-sm md:text-md mb-8 text-gray-600 font-inter"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Please fill your email addrees and click the generate button.
                And we well generate the code for you to the space.
              </p>
              <div className="relative flex items-center max-w-sm gap-x-6">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center mb-20">
        <img src={CouplerFoorterCurveImage} className="w-full" />
        <img
          src={CouplerFooterPeopleImage}
          className="absolute bottom-0 inset-x-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}

export default TryItOut;
