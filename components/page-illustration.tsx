import Image from "next/image"

import Stripes from "@/public/images/stripes.svg"

export default function PageIllustration() {
  return (
    <>
      {/* Stripes illustration */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          alt="Stripes"
          priority
        />
      </div>
      {/* Circles */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-32 ml-[580px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]" />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[420px] ml-[380px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]" />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[640px] -ml-[300px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]" />
      </div>
    </>
  )
}