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
    let vx = 0;
    let vy = 0;
    let rot = 0;
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
    const onEnterInteractive = () => el.classList.add("is-active");
    const onLeaveInteractive = () => el.classList.remove("is-active");
    const onDown = () => {
      press = 0.7;
    };
    const onUp = () => {
      press = 1;
    };
    const onDocLeave = () => {
      el.style.opacity = "0";
      shown = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onDocLeave);

    // Grow slightly over clickable elements.
    const interactive = "a, button, [role='button'], input, textarea, label, summary";
    document.querySelectorAll(interactive).forEach((node) => {
      node.addEventListener("mouseenter", onEnterInteractive);
      node.addEventListener("mouseleave", onLeaveInteractive);
    });

    // Spring constants.
    const stiffness = 0.16;
    const damping = 0.75;

    const loop = () => {
      const ax = (targetX - x) * stiffness;
      const ay = (targetY - y) * stiffness;
      vx = (vx + ax) * damping;
      vy = (vy + ay) * damping;
      x += vx;
      y += vy;

      const speed = Math.hypot(vx, vy);
      if (speed > 0.35) {
        const targetRot = (Math.atan2(vy, vx) * 180) / Math.PI + 90;
        let diff = targetRot - rot;
        diff = ((diff + 180) % 360) - 180;
        rot += diff * 0.2;
      }
      const stretch = Math.min(speed / 70, 0.28);

      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${press * (1 + stretch)}, ${press * (1 - stretch)})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onDocLeave);
      document.querySelectorAll(interactive).forEach((node) => {
        node.removeEventListener("mouseenter", onEnterInteractive);
        node.removeEventListener("mouseleave", onLeaveInteractive);
      });
      document.documentElement.classList.remove("has-smooth-cursor");
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="smooth-cursor pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
      style={{ willChange: "transform", transformOrigin: "12px 2px" }}
    >
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: -12, marginTop: -2, display: "block" }}
      >
        <path
          d="M12 2 L20.5 23 L12 18 L3.5 23 Z"
          fill="#2563eb"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
