"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function RotatingBanner() {
  const t = useTranslations("home.hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section element
      const heroSection = document.querySelector('section[class*="min-h"]');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        
        // Hide banner when hero section is out of view (scrolled past)
        setIsVisible(heroBottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="mt-2">
      <div 
        className="overflow-hidden rounded-lg py-[3px] px-[10px]"
        style={{
          background: "linear-gradient(90deg, #C1272D 0%, #F16464 100%)",
          borderRadius: "8px"
        }}
      >
        <div className="flex animate-[scroll_20s_linear_infinite] items-center gap-4 whitespace-nowrap">
          {/* Repeat the text multiple times for seamless scroll */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-medium text-white md:text-base">
                {t("bannerText")}
              </span>
              <span className="text-red-200">★</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
