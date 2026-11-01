"use client";

import { useEffect, useRef } from "react";

export default function SmoothCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop / fine pointers only — skip touch devices and reduced-motion.
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    document.documentElement.classList.add("has-smooth-cursor");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let prevX = x;
    let prevY = y;
    let rot = -40;
    let press = 1;
    let raf = 0;
    let shown = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!shown) {
        shown = true;
        el.style.opacity = "1";
      }
    };
    const onDown = () => (press = 0.78);
    const onUp = () => (press = 1);
    const onDocLeave = () => {
      el.style.opacity = "0";
      shown = false;
    };
    const onEnterInteractive = () => el.classList.add("is-active");
    const onLeaveInteractive = () => el.classList.remove("is-active");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onDocLeave);

    const interactive = "a, button, [role='button'], input, textarea, label, summary";
    const nodes = Array.from(document.querySelectorAll(interactive));
    nodes.forEach((n) => {
      n.addEventListener("mouseenter", onEnterInteractive);
      n.addEventListener("mouseleave", onLeaveInteractive);
    });

    const loop = () => {
      // Exponential follow — smooth, never overshoots (no jitter).
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;

      const dx = x - prevX;
      const dy = y - prevY;
      prevX = x;
      prevY = y;

      // Rotate toward travel direction only when clearly moving.
      const dist = Math.hypot(dx, dy);
      if (dist > 2) {
        const target = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        let diff = target - rot;
        diff = ((diff + 180) % 360) - 180;
        rot += diff * 0.15;
      }

      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${press})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onDocLeave);
      nodes.forEach((n) => {
        n.removeEventListener("mouseenter", onEnterInteractive);
        n.removeEventListener("mouseleave", onLeaveInteractive);
      });
      document.documentElement.classList.remove("has-smooth-cursor");
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="smooth-cursor pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
      style={{ willChange: "transform", transformOrigin: "14px 3px" }}
    >
      <svg
        width="28"
        height="30"
        viewBox="0 0 28 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: -14, marginTop: -3, display: "block" }}
      >
        <path
          d="M14 3 L25.5 27 L14 21 L2.5 27 Z"
          fill="#111827"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
