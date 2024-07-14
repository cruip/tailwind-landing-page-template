import Image from "next/image";
import React from "react";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import styles from "@/app/css/additional-styles/beyond-coding.module.css";
import { TimelineData } from "@/app/lib/data";

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
        <div className={`flex overflow-hidden h-screen ${styles.containerr}`}>
          <div className="flex-1 flex flex-col items-start justify-center p-2.5">
            {/* Left static content */}
            <h1>Beyond Coding</h1>
            <p>Static content on the left side.</p>
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
                          <p>{item}</p>
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
              “Simple has simplified my life in more ways than one. From
              managing my sites to{" "}
              <em className="italic text-gray-500">keeping track of tasks</em>,
              it's become my go-to tool for everything.”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Mary Sullivan</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                CTO at Microsoft
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
