import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroContent() {
  return (
    <div className="pb-12 text-center md:pb-16">
      <div
        className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
        data-aos="zoom-y-out"
      >
        <div className="-mx-0.5 flex justify-center -space-x-3">
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar01}
            width={32}
            height={32}
            alt="Avatar 01"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar02}
            width={32}
            height={32}
            alt="Avatar 02"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar03}
            width={32}
            height={32}
            alt="Avatar 03"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar04}
            width={32}
            height={32}
            alt="Avatar 04"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar05}
            width={32}
            height={32}
            alt="Avatar 05"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar06}
            width={32}
            height={32}
            alt="Avatar 06"
          />
        </div>
      </div>
      <h1
        className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
        data-aos="zoom-y-out"
        data-aos-delay={150}
      >
        The website builder you're <br className="max-lg:hidden" />
        looking for
      </h1>
      <div className="mx-auto max-w-3xl">
        <p
          className="mb-8 text-lg text-gray-700"
          data-aos="zoom-y-out"
          data-aos-delay={300}
        >
          Simple is a modern website builder powered by AI that changes
          how companies create user interfaces together.
        </p>
        <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
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
  );
}
