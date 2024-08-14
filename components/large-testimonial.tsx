import Image from "next/image";
import Logo01 from "@/public/images/logo-01.svg";
import React from "react";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import styles from "@/app/css/additional-styles/beyond-coding.module.css";
import { TimelineData } from "@/app/lib/data";
import Projects from "./projects";

export default function LargeTestimonial() {
  const calculateRotation = (index: number) => {
    const baseRotation = 25; // Starting rotation for the middle card
    const separationAngle = 20; // Angle separation between cards
    const middleIndex = Math.floor(TimelineData.length / 2);

    // Calculate rotation based on the index relative to the middle card
    return (index - middleIndex) * separationAngle + baseRotation;
  };
  return (
    <section>
      <div className="mx-auto full-w px-4 mt-4 sm:px-6">
        <div className="mx-auto max-w-3xl py-10 text-center md:pb-15">
          <h2 className="text-3xl font-bold md:text-4xl">
            Projects
          </h2>
        </div>
        <Projects />
        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[324px] items-center justify-center">
            {/* Small blue dots */}
            <div className="absolute -z-10">
              <svg
                className="fill-pink-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-blue-500"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            
            <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
           
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative"
                    src={Logo01}
                    width={32}
                    height={32}
                    alt="Logo 01"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              
            </div>
          </div>
        </div>
        <div className={`flex overflow-hidden h-screen ${styles.containerr}`}>
          <div className="flex-1 flex flex-col items-start text-2xl font-bold justify-center p-2.5">
            {/* Left static content */}
            <h1>Beyond Coding</h1>
            {/* <p>Static content on the left side.</p> */}
          </div>
          {/* <div className={styles.divider}></div> */}
          <div className={styles.timeline}>
            {/* Right scrollable timeline */}
            {TimelineData.map((section, index) => (
              <div key={index} className={`${styles.timelineSection}`}>
                <h2 className={`text-xl ${styles.timelineTitle}`}>{section.title}</h2>
                <div className={styles.cardContainerWrapper}>
                <div className={` ${styles.cardContainer}`}>
                  {section.items.map((item, idx) => {
                    const rotation = calculateRotation(idx);
                    return (
                      <div
                        key={idx}
                        className={styles.glass}
                        style={
                          {
                            '--r': `${rotation}deg`, // Use units
                            transform: `rotate(${rotation}deg)`
                          } as React.CSSProperties
                        }
                        data-text={item}
                      >
                        
                        <div className={styles.glassContent}>
                          {/* <p>{item}</p> */}
                          <Image
                              src={section.img[idx]} 
                              width={200} // Fixed width
                              height={150} 
                              alt=""
                              className="object-center"
                            />
                        </div>
                      </div>
                    );
                  })}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “No pain, no gain. {" "}
              <em className="italic text-gray-500">Aim for the stars</em>,
              and I'll reach my dream”
            </p>
            {/* <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">HaiZhou</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                Tech Manager at Mediacorp
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className="mx-auto max-w-3xl py-10 text-center md:pb-15">
          <h2 className="text-3xl font-bold md:text-4xl">
            Projects
          </h2>
        </div>
        <Projects /> */}
      </div>
    </section>
  );
}
