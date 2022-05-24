import React from "react";
import WhyNowImage from "../images/why-now.png";
function WhyNow() {
  return (
    <section className="relative">
      <div className="bg-yellow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-primary">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="pb-12 md:pb-16 md:grid md:grid-cols-12 md:gap-6">
              {/* Section image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 mb-8 md:mb-0"
                data-aos="fade-right"
              >
                <img src={WhyNowImage} width="381" height="491" />
              </div>
              {/* Section header */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 md:mt-6"
                data-aos="zoom-y-out"
              >
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Why Now
                </h1>

                <div className="max-w-3xl">
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    The long-lasting impact of the pandemic has disengaged
                    employees and lost productivity, which is absolutely harmful
                    for the business.
                  </p>
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Either a fully or partially remote work could go worse. Time
                    to make this right!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyNow;
