"use client";
import PageIllustration from "@/components/page-illustration";
import UserImg from "./user-img";
import AnimatedBackground from "./ui/animatedbackground";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 bg-gray-900">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          
          <div className="pb-12 text-center md:pb-4">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
            
            <h1
              className="mb-6 border-y text-5xl text-gray-50 font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-500/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              <span className="text-[#ffca0a]">
              Your</span> team <br className="max-lg:hidden" />
              for <span className="text-[#FF9797]">
              any</span> project
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-100"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Budget-friendly teams with AI knowledge that deliver projects at high-quality standards
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-600/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl py-4"
            data-aos="zoom-y-out"
            data-aos-delay={400}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-4 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[40px] before:bg-[length:16px_8px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[40px]">
                <span className="text-[18px] font-medium text-white">
                  PrudenPro.space
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login {" "}
                </span>
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=user@PrudenPro.space
                </span>{" "}
                <span className="animate-[code-4_10s_infinite] text-[#ffca0a]">
                  Successfully logged-in.
                </span>
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish {" "}
                </span><br />                
                <span className="animate-[code-6_10s_infinite] text-[#FF9797]">
                  Package published.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
