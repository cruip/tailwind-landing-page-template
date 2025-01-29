import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import WaveLogo from "./ui/wave-logo";

export default function Cta() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative isolate overflow-hidden rounded-2xl text-center shadow-xl"
          data-aos="zoom-y-out"
        >
          {/* Dark Background */}
          <div className="absolute inset-0 -z-20 bg-gray-900"></div>

          {/* Glow Effect */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] animate-[pulse_4s_ease-in-out_infinite] rounded-full border-[20px] border-blue-600/30 blur-3xl" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-12 w-12 animate-float rounded-lg bg-blue-500/10"
                style={{
                  top: `${25 * (i + 1)}%`,
                  left: i % 2 === 0 ? "-1rem" : "auto",
                  right: i % 2 === 1 ? "-1rem" : "auto",
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${6 + i}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none opacity-20"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
              priority
            />
          </div>

          <div className="relative px-4 py-12 md:px-12 md:py-20">
            {/* Enhanced Sound Wave Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-blue-500/20 blur-xl"></div>
                <WaveLogo size="lg" className="scale-150" />
              </div>
            </div>
            
            <h2 className="relative mb-6 text-3xl font-bold text-gray-200 md:text-4xl">
              Experience the Future of <br />
              <span className="relative">
                <span className="absolute -inset-1 -skew-x-12 bg-blue-500/10"></span>
                <span className="relative bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  Workplace Feedback
                </span>
              </span>
            </h2>
            
            {/* Enhanced Benefits Grid */}
            <div className="relative mb-8 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
              {benefitsData.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="relative mx-auto mt-12 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-blue-500/20 blur-xl"></div>
              <a
                className="group relative mb-4 w-full overflow-hidden rounded-full bg-gradient-to-t from-blue-700 to-blue-600 px-8 py-3 text-white shadow transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 sm:mb-0 sm:w-auto"
                href="#0"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full"></div>
                <span className="relative inline-flex items-center font-medium">
                  Schedule a call today{" "}
                  <span className="ml-1 tracking-normal text-blue-200 transition-transform duration-150 group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefitsData: BenefitCardProps[] = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "Natural Conversations",
    description: "Engage with an AI that understands context, sentiment, and nuance in every interaction.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
    title: "Actionable Insights",
    description: "Transform feedback into clear, data-driven recommendations for your organization.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "Continuous Improvement",
    description: "Build a culture of feedback that drives ongoing growth and engagement.",
  },
];

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="group relative isolate rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative mb-4 inline-block rounded-full bg-blue-900/50 p-3">
        <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
