'use client';

import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className=" pb-12 text-center md:pb-16 grid justify-items-center">
            
            <h1
              className="mb-5 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Hi! I'm Lynn Tang <br className="max-lg:hidden" />
              
            </h1>
            <div className="mb-[0.5em] grid justify-items-center ">
              <video
                ref={videoRef}
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent w-full max-w-[10em] md:max-w-[14em]"
                src="/images/ava.mp4"
                data-aos="zoom-y-out"
                autoPlay
                muted
                loop
              />
              {!isPlaying && (
                <button
                  className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-[1.5em]"
                  onClick={togglePlay}
                >
                </button>
              )}
            </div>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-5 text-xl text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Final Year Student @NTU, Singapore
              </p>
              <p
                className="mb-8 text-lg text-gray-500 max-w-4xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Crafting beautiful and functional web applications is my passion. As a full-stack developer, I bring together my skills in front-end and back-end development to create seamless user experiences.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      About Me{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#1"
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
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
          {/* Bottom section */}
          <div
            className="mx-auto max-w-3xl text-center py-3"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
          <h1 className="custom-font mb-[1em] text-[1.5em] md:text-[2em] px-[1em] font-semibold box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        MY ASPIRATION
      </h1>
      <h1 className="custom-font mb-[1em] text-[1.5em] md:text-[2em] font-semibold">
        Creator - Coding - Community
      </h1>
      <div className="relative z-[-1] flex flex-row gap-[1em] place-items-center justify-center before:absolute before:h-[1000px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[440px] before:lg:h-[460px]">
        <div className="relative w-full sm:w-auto px-[1em]">
          <video
            ref={videoRef}
            className="w-full max-w-md relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/images/il.mp4"
            autoPlay
            muted
            loop
          />
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
              onClick={togglePlay}
            />
          )}
        </div>
        <div className="relative w-full sm:w-auto px-[1em]">
          <video
            ref={videoRef}
            className="w-full max-w-md relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/images/coding.mp4"
            autoPlay
            muted
            loop
          />
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
              onClick={togglePlay}
            />
          )}
        </div>
        <div className="relative w-full sm:w-auto px-[1em]">
          <video
            ref={videoRef}
            className="w-full max-w-md relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent"
            src="/images/com.mp4"
            autoPlay
            muted
            loop
          />
          {!isPlaying && (
            <button
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-2xl"
              onClick={togglePlay}
            />
          )}
        </div>
      </div>
      </div>
        </div>
      </div>
    </section>
  );
}
