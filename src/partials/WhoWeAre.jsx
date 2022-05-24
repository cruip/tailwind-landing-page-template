import React from "react";
import WhoWeAre from "../images/who-we-are.png";
function WhyNow() {
  return (
    <section className="relative">
      <div className="bg-orange">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="pb-12 md:pb-16 md:grid md:grid-cols-12 md:gap-6">
              {/* Section header */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 md:mt-6"
                data-aos="zoom-y-out"
              >
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Who We Are
                </h1>

                <div className="max-w-3xl">
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    We are a team of challenge seekers who are passionate about
                    building great products.
                  </p>
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Identifying people as the most valuable asset of the company
                    and the key to business success, we devote full effort to
                    deliver solution necessary for building a great team
                    cohesion and team work.
                  </p>
                </div>
              </div>
              {/* Section image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 mb-8 md:mb-0"
                data-aos="fade-right"
              >
                <img src={WhoWeAre} width="429" height="536" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyNow;
