"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="flex justify-between bg-blue-900 p-3 text-sm text-slate-50 shadow-lg md:rounded">
            <div className="inline-flex items-center text-blue-200">
              <svg className="mr-2 h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <a
                className="font-medium text-white hover:text-blue-200 hover:underline"
                href="#0"
                target="_blank"
                rel="noreferrer"
              >
                Try Voice Demo
              </a>{" "}
              <span className="px-1.5 italic">or</span>{" "}
              <a
                className="font-medium text-blue-400 hover:text-blue-300 hover:underline"
                href="#0"
                target="_blank"
                rel="noreferrer"
              >
                See How It Works
              </a>
            </div>
            <button
              className="ml-3 border-l border-blue-800 pl-2 text-blue-300 hover:text-blue-200"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-4 w-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
