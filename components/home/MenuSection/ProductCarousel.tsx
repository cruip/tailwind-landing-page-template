"use client";

import { ReactNode } from "react";

interface ProductCarouselProps {
  children: ReactNode;
}

export default function ProductCarousel({ children }: ProductCarouselProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {children}
    </div>
  );
}
