"use client";

import Headroom from "react-headroom";
import Link from "next/link";
import Logo from "./logo";

import { useState, useEffect } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Headroom>
      <header className={`fixed top-0 z-30 w-full transform transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#0b2251]/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            {/* Site branding */}
            <div className="flex flex-1 items-center">
              <Logo />
            </div>

            {/* Desktop sign in links */}
            <ul className="flex flex-1 items-center justify-end gap-3">
              <li>
                <Link
                  href="//tbc"
                  className="btn-sm text-gray-200 shadow-sm hover:bg-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="//tbc"
                  className="btn-sm text-gray-50 shadow-sm hover:bg-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="//tbc"
                  className="btn-sm text-gray-200 shadow-sm hover:bg-gray-900"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="//tbc"
                  className="btn-sm text-gray-200 shadow-sm hover:bg-gray-900"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
   </Headroom>   
  );
}
