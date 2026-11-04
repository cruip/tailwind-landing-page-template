import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

export default function HeroHome() {
  return (
    <SmoothScrollHero
      scrollHeight={1500}
      images={[
        "/hero-city.jpg",
        "/data-screen.jpg",
        // best available crop — image is a macro portrait; swap for a wide-angle lab shot when ready
        { src: "/thisisengineering.jpg", size: "cover", position: "center 40%" },
        // woman + laptop in frame
        { src: "/student-outside.jpg", size: "cover", position: "center 60%" },
      ]}
      initialClipPercentage={18}
      finalClipPercentage={82}
    >
      <div className="mx-auto w-full max-w-lg px-4 pointer-events-auto">
        <div className="pb-6 pt-16">
          <div className="pb-6 text-center">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-white/20"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-white/20"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-white/20"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-white/20"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-white/20"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-white/20"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 06"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold text-white drop-shadow-lg [border-image:linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Navigating workplace change in the UK
            </h1>
            <div className="mx-auto max-w-sm">
              <p
                className="mb-8 text-base text-white/90 drop-shadow-md"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Practical guidance on job automation, re-skilling, and building
                a career that lasts — whether you're facing redundancy, switching
                direction, or just starting out.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,rgba(255,255,255,0.3),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#about"
                  >
                    <span className="relative inline-flex items-center">
                      Explore resources{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#focus-areas"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmoothScrollHero>
  );
}
