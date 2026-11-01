import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import AppShot from "@/public/images/esaa-app.png";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm"
              data-aos="zoom-y-out"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Enterprise Search &amp; AI Agents
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              One private AI workspace for{" "}
              <br className="max-lg:hidden" />
              your company&apos;s{" "}
              <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                knowledge
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                ESAA is a self-hosted ChatGPT for your company that knows your
                documents, can use your business systems, and keeps your data
                inside your network. Every answer comes with citations to the
                source.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#demo"
                  >
                    <span className="relative inline-flex items-center">
                      Request a demo{" "}
                      <span className="ml-1 tracking-normal text-blue-200 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#features"
                  >
                    Explore the platform
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero product shot */}
          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative rounded-2xl bg-gray-900 p-1.5 shadow-2xl shadow-gray-900/20 before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-3 w-3 rounded-full bg-gray-600/80" />
                <span className="h-3 w-3 rounded-full bg-gray-600/80" />
                <span className="h-3 w-3 rounded-full bg-gray-600/80" />
                <span className="ml-3 text-[13px] font-medium text-gray-400">
                  ESAA — your private AI workspace
                </span>
              </div>
              <Image
                className="w-full rounded-xl"
                src={AppShot}
                width={1853}
                height={958}
                alt="ESAA workspace — ask questions across your company knowledge in plain language"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
