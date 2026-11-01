"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SmoothCursor from "@/components/smooth-cursor";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 550,
      easing: "ease-out",
      offset: 40,
    });
  }, []);

  return (
    <>
      <SmoothCursor />
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
