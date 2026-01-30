import PageIllustration from "@/components/page-illustration";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <HeroContent />
          
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  cruip.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
