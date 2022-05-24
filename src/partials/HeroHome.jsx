import React, { useState } from "react";

import TeamCohesionImage from "../images/team-cohesion.png";
import WhyNowImage from "../images/why-now.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Hero content */}
      <div className="bg-skin">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-primary">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="pb-12 md:pb-16 md:grid md:grid-cols-12 md:gap-6">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 md:mt-6"
                data-aos="fade-right"
              >
                <h1
                  className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Foster
                  <p className="text-5xl md:text-6xl">Team Cohesion</p>
                  {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                wonderful
              </span> */}
                </h1>

                <div className="max-w-3xl">
                  <p
                    className="text-lg md:text-xl mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    We help companies, leaders build and improve team cohesion
                    for a greater business efficiency.
                  </p>
                  <div
                    className="max-w-xs sm:max-w-none sm:flex "
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    {/* <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div> */}
                    <div>
                      <a
                        className="btn text-white bg-primary hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                        href="#0"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0 md:order-1"
                data-aos="zoom-y-out"
              >
                <img src={TeamCohesionImage} width="532" height="553" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Now content */}
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

export default HeroHome;
