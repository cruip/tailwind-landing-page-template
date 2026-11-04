"use client";
import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

// ~26px border at 1280px wide — image never goes fully edge-to-edge
const BORDER_PERCENT = 2;

interface SmoothScrollHeroProps {
  scrollHeight: number;
  desktopImage: string;
  mobileImage: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  children?: React.ReactNode;
  imageOpacity?: number;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 18,
  finalClipPercentage = 82,
  children,
  imageOpacity = 0.7,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Progress 0→1 relative to this container only.
  // 0 = container top at viewport top, 1 = container bottom at viewport bottom.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // One-way ratchet: only ever advances forward, never rewinds on scroll-up.
  const maxProgress = useMotionValue(0);

  React.useEffect(() => {
    // Initialise from whatever progress already exists (handles browser
    // scroll restoration landing the page mid-scroll).
    const current = scrollYProgress.get();
    if (current > maxProgress.get()) maxProgress.set(current);

    return scrollYProgress.on("change", (v) => {
      if (v > maxProgress.get()) maxProgress.set(v);
    });
  }, [scrollYProgress, maxProgress]);

  const clipStart = useTransform(
    maxProgress,
    [0, 1],
    [initialClipPercentage, BORDER_PERCENT]
  );
  const clipEnd = useTransform(
    maxProgress,
    [0, 1],
    [finalClipPercentage, 100 - BORDER_PERCENT]
  );
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(maxProgress, [0, 1], ["170%", "100%"]);

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      {/* Sticky clip container */}
      <motion.div
        className="sticky top-0 h-screen w-full bg-black"
        style={{ clipPath, willChange: "clip-path" }}
      >
        {/* Mobile image */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: imageOpacity,
          }}
        />
        {/* Desktop image */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: imageOpacity,
          }}
        />
      </motion.div>

      {/* Content overlay — sticky so it stays centred while the zoom plays.
          -mt-[100vh] pulls it back to overlap the sticky background div. */}
      {children && (
        <div className="sticky top-0 -mt-[100vh] h-screen w-full flex items-center justify-center z-10 pointer-events-none">
          <div className="pointer-events-auto w-full">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmoothScrollHero;
