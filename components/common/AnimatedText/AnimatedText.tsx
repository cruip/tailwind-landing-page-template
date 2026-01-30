"use client";

import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right";
  delay?: number;
}

export default function AnimatedText({
  children,
  animation = "fade-in",
  delay = 0,
  className,
  ...props
}: AnimatedTextProps) {
  const animations = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-down": "animate-slide-down",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
  };

  return (
    <div
      className={cn(animations[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
