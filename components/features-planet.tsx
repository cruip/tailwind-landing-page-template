'use client'
import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import React, { useState, useEffect, useRef } from 'react';

export default function FeaturesPlanet() {

  const [viewportHeight, setViewportHeight] = useState(0);
  useEffect(() => {
    
  function handleResize() {
      setViewportHeight(window.innerHeight);
    }
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
  {/* Section header */}
  <div className="mx-auto max-w-3xl pb-14 text-center md:pb-15">
    <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
      About Me
    </h2>
  </div>
  <div className="flex flex-col items-center lg:px-4 lg:flex-row lg:justify-center">
    {/* Planet */}
    <div className="pb-16 md:pb-20 md:w-1/2 md:flex-shrink-0" data-aos="zoom-y-out">
      <div className="text-center">
        <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
          <Image
            className="rounded-full bg-gray-900"
            src={PlanetImg}
            width={400}
            height={400}
            alt="Planet"
          />
          <div className="pointer-events-none" aria-hidden="true">
            <Image
              className="absolute -right-64 -top-20 z-10 max-w-none"
              src={PlanetOverlayImg}
              width={789}
              height={755}
              alt="Planet decoration"
            />
            <div>
              <Image
                className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                src={PlanetTagImg01}
                width={253}
                height={56}
                alt="Tag 01"
              />
              <Image
                className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                src={PlanetTagImg02}
                width={241}
                height={56}
                alt="Tag 02"
              />
              <Image
                className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                src={PlanetTagImg03}
                width={243}
                height={56}
                alt="Tag 03"
              />
              {/* <Image
                className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                src={PlanetTagImg04}
                width={251}
                height={56}
                alt="Tag 04"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Grid + Skill*/}
    <div className="flex flex-col">
    {/*Grid */}
    <div className="grid grid-cols-3 md:gap-5 gap-2 text-center px-2 mx-auto my-auto">
    
      <div className="group rounded-lg border border-transparent p-[0.5em] md:p-[1em] shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className="flex dark:drop-shadow-[0_0_0.8rem_#ffffff70] items-center">
          <h3 className="font-semibold ml-[0.5em] text-xs sm:text-sm md:text-base bg-gradient-to-r bg-clip-text text-center text-transparent from-pink-400 via-purple-500 to-indigo-500 animate-text">
            Experience
          </h3>
        </div>
        <p className="custom-font mt-2 rounded-xl px-[0.2em] text-sm py-[0.5em] md:px-[1.4em] md:py-[0.6em] md:text-lg text-center transition-all hover:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500">
          1 <br/> Year
        </p>
      </div>
      <div className="group rounded-lg border border-transparent p-[0.5em] md:p-[1em] shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className="flex dark:drop-shadow-[0_0_0.8rem_#ffffff70] items-center">
          <h3 className="font-semibold ml-[0.5em] text-xs sm:text-sm md:text-base bg-gradient-to-r bg-clip-text text-center text-transparent from-pink-400 via-purple-500 to-indigo-500 animate-text">
            Completed
          </h3>
        </div>
        <p className="custom-font mt-2 rounded-xl px-[0.2em] py-[0.5em] text-sm md:px-[1.4em] md:py-[0.6em] md:text-lg text-center transition-all hover:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500">
          10+<br/>Projects
        </p>
      </div>
      <div className="group rounded-lg border border-transparent p-[0.5em] md:p-[1em] shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className="flex dark:drop-shadow-[0_0_0.8rem_#ffffff70] items-center">
          <h3 className="font-semibold ml-[0.5em] text-xs sm:text-sm md:text-base bg-gradient-to-r bg-clip-text text-center text-transparent from-pink-400 via-purple-500 to-indigo-500 animate-text">
            Worked in
          </h3>
        </div>
        <p className="custom-font mt-2 rounded-xl px-[0.2em] py-[0.5em] text-sm md:px-[1.4em] md:py-[0.6em] md:text-lg text-center transition-all hover:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500">
          4+ <br/>Company
        </p>
      </div>
    
  </div>
  {/*Skills */}
  <div>
    {viewportHeight > 600 && (
      <div className="mx-auto max-w-[30em] mt-[0.25em] px-[1.5em] sm:max-w-[30em] md:max-w-[34em] md:px-[2em] lg:px-[1em] sm:py-[1em] md:py-[0.5em]">
            <h3 className="text-center text-[0.5em] md:text-[0.75em] font-semibold text-gray-500 uppercase">Works with different technologies</h3>
             <div className="mx-auto mt-[1em] grid max-w-[20em] items-center gap-x-[1em] gap-y-[1em] sm:max-w-[24em] sm:gap-x-[1.5em] lg:mx-0 lg:max-w-none sm:grid-cols-8 grid-cols-4 sm:justify-center">

          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682840456/image_2_misfnu.png"
            alt="Javascript"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843046/image_14_1_riikm8.png"
            alt="Typescript"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843188/PHP-logo.svg_1_osg7q3.png"
            alt="PHP"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682845481/image_16_1_nibbjo.png"
            alt="C#"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841501/image_8_ow9j2c.png"
            alt="Python"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841282/image_5_zryc0v.png"
            alt="Tailwind"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682840617/image_3_nrk8jx.png"
            alt="VueJs"
          />
          <Image
            className="max-h-[3em] w-full object-contain col-span-1 dark:invert"
            src="/images/docker.jpeg"
            alt="AWS"
            width="158" height="48"
          />
        </div>
        <div className="mx-auto mt-[2em] grid max-w-[20em] grid-cols-4 items-center gap-x-[1em] gap-y-[1em] sm:max-w-[24em]  sm:gap-x-[1.5em] lg:mx-0 lg:max-w-none sm:grid-cols-8">
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841142/image_4_vyfc0e.png"
            alt="NuxtJs"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682841744/image_10_zfv0fz.png"
            alt="NodeJs"
          />
          <Image
            className="max-h-[3em] w-full object-contain col-span-1"
            src="/images/aws.png"
            alt="AWS"
            width="158" height="48"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843277/image_15_1_mxtpes.png"
            alt=".NET Core"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843518/mysql-logo-png-transparent_1_uvb3gb.png"
            alt="MySQL"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682844385/microsoft-sql-server-logo-svgrepo-com_2_mtucyf.png"
            alt="MsSQL"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682842207/Microsoft_Azure_Logo.svg_1_pwbd5z.png"
            alt="Azure"
          />
          <img
            className="max-h-[3em] w-full object-contain col-span-1"
            src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_300/v1682843441/Ubuntu-Logo_1_ppdvx1.png"
            alt="Ubuntu"
          />
        </div>
      </div>)}
  </div>
  </div>
    {/* <div className="grid overflow-hidden grid-cols-3 sm:grid-cols-3 md:grid-cols-3 md:w-1/2 lg:flex lg:flex-col lg:justify-center lg:space-y-4 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
      <article>
        <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <svg
            className="fill-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
          >
            <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
          </svg>
          <span>Experience</span>
        </h3>
        <p className="text-[15px] text-gray-400">
          1 Year
        </p>
      </article>
      <article>
        <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <svg
            className="fill-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
          >
            <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
          </svg>
          <span>Completed</span>
        </h3>
        <p className="text-[15px] text-gray-400">
          10+ Projects
        </p>
      </article>
      <article>
        <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <svg
            className="fill-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
          >
            <path
              d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
              opacity=".3"
            />
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
          </svg>
          <span>Worked in</span>
        </h3>
        <p className="text-[15px] text-gray-400">
          4+ Company
        </p>
      </article>
    </div> */}
  </div>
</div>

      </div>
    </section>
  );
}
