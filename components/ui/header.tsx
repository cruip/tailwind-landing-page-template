"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./language-selector";
import Button from "./button";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-[72px] items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-gray-950 to-gray-800 px-3 shadow-lg shadow-black/[0.03]">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/images/gb-logo.png"
                alt="Goodblend"
                width={204}
                height={48}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden items-center justify-center gap-4 lg:gap-6 md:flex flex-1 min-w-0">
            <Link
              href="#app"
              className="text-sm text-white transition hover:text-gray-300 whitespace-nowrap"
            >
              {t("nav.app")}
            </Link>
            <Link
              href="#partnership"
              className="text-sm text-white transition hover:text-gray-300 whitespace-nowrap"
            >
              {t("nav.partnership")}
            </Link>
            <Link
              href="#about"
              className="text-sm text-white transition hover:text-gray-300 whitespace-nowrap"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#menu"
              className="text-sm text-white transition hover:text-gray-300 whitespace-nowrap"
            >
              {t("nav.menu")}
            </Link>
            <Link
              href="#stores"
              className="text-sm text-white transition hover:text-gray-300 whitespace-nowrap"
            >
              {t("nav.stores")}
            </Link>
            <Link
              href="#career"
              className="text-sm text-white transition hover:text-gray-300 whitespace-nowrap"
            >
              {t("nav.career")}
            </Link>
          </nav>

          {/* Get App Button & Language Selector */}
          <div className="flex items-center justify-end gap-3 flex-shrink-0">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Get App Button - Desktop Only */}
            <Link href="#get-app" className="hidden md:block">
              <Button variant="primary" size="lg">
                {t("header.getApp")}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              aria-label="Menu"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-gradient-to-r from-gray-950 to-gray-800 p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="#app"
                className="text-sm text-white transition hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.app")}
              </Link>
              <Link
                href="#partnership"
                className="text-sm text-white transition hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.partnership")}
              </Link>
              <Link
                href="#about"
                className="text-sm text-white transition hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#menu"
                className="text-sm text-white transition hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.menu")}
              </Link>
              <Link
                href="#stores"
                className="text-sm text-white transition hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.stores")}
              </Link>
              <Link
                href="#career"
                className="text-sm text-white transition hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.career")}
              </Link>
              <div className="pt-2">
                <Link href="#get-app" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    {t("header.getApp")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
