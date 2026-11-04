"use client";
import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const BORDER_PERCENT = 2;
const FADE_INTERVAL_MS = 7000;
const CROSSFADE_S = 2;

interface HeroImageConfig {
  src: string;
  size?: string;
  position?: string;
}

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  images: (string | HeroImageConfig)[];
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  children?: React.ReactNode;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  images,
  initialClipPercentage = 18,
  finalClipPercentage = 82,
  children,
}) => {
  const normImages: HeroImageConfig[] = images.map((img) =>
    typeof img === "string" ? { src: img } : img,
  );

  // Window scroll — no DOM measurement, no hydration jump
  const { scrollY } = useScroll();

  // One-way ratchet: only ever advances
  const maxScrollY = useMotionValue(0);

  // Use a ref for lock flag so it never triggers a re-render mid-animation
  const isLockedRef = React.useRef(false);
  const [isLocked, setIsLocked] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    // Seed from current scroll position (handles any residual browser restoration)
    const seed = scrollY.get();
    if (seed > 0) {
      maxScrollY.set(seed);
      if (seed >= scrollHeight) {
        isLockedRef.current = true;
        setIsLocked(true);
      }
    }

    return scrollY.on("change", (v) => {
      if (v > maxScrollY.get()) {
        maxScrollY.set(v);
        if (v >= scrollHeight && !isLockedRef.current) {
          isLockedRef.current = true;
          setIsLocked(true); // single state flip — only ever fires once
        }
      }
    });
  }, [scrollY, maxScrollY, scrollHeight]);

  // Fade sequence — starts after lock, stops at last image
  React.useEffect(() => {
    if (!isLocked || activeIndex >= normImages.length - 1) return;
    const t = setTimeout(() => setActiveIndex((i) => i + 1), FADE_INTERVAL_MS);
    return () => clearTimeout(t);
  }, [isLocked, activeIndex, normImages.length]);

  // Transforms — clamped so they never overshoot
  const clipStart = useTransform(
    maxScrollY,
    [0, scrollHeight],
    [initialClipPercentage, BORDER_PERCENT],
    { clamp: true },
  );
  const clipEnd = useTransform(
    maxScrollY,
    [0, scrollHeight],
    [finalClipPercentage, 100 - BORDER_PERCENT],
    { clamp: true },
  );
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  // First image zooms out; subsequent images appear at their final size
  const firstImageSize = useTransform(
    maxScrollY,
    [0, scrollHeight],
    ["170%", "cover"],
    { clamp: true },
  );

  return (
    <div
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      {/* Sticky clipped frame */}
      <motion.div
        className="sticky top-0 h-screen w-full bg-black"
        style={{ clipPath, willChange: "clip-path" }}
      >
        {normImages.map(({ src, size, position }, idx) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: idx === 0 ? firstImageSize : (size ?? "cover"),
              backgroundPosition: position ?? "center",
              backgroundRepeat: "no-repeat",
              opacity: idx === activeIndex ? 1 : 0,
              transition: `opacity ${CROSSFADE_S}s ease-in-out`,
            }}
          />
        ))}
        {/* Dark overlay — keeps white text readable throughout */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/35 to-black/20" />
      </motion.div>

      {/* Sticky content — stays centred while zoom plays */}
      {children && (
        <div className="sticky top-0 -mt-[100vh] h-screen w-full flex items-center justify-center z-10 pointer-events-none">
          <div className="pointer-events-auto w-full">{children}</div>
        </div>
      )}
    </div>
  );
};

export default SmoothScrollHero;
