"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import Navigation from "./Navigation";
import LanguageSelector from "./LanguageSelector";
import UserMenu from "./UserMenu";
import RotatingBanner from "./RotatingBanner";
import Button from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-30 w-full pt-2 md:pt-6">
      <div className="layout-content">
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
          <Navigation />

          {/* Get App Button & Language Selector */}
          <div className="flex items-center justify-end gap-3 flex-shrink-0">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Get App Button - Desktop Only */}
            <UserMenu />

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
            <Navigation 
              isMobile={true} 
              onLinkClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="pt-2">
              <Link href="#get-app" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" className="w-full">
                  {t("header.getApp")}
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Rotating Text Banner - Below Header, same width as header, 8px gap */}
        <RotatingBanner />
      </div>
    </header>
  );
}
