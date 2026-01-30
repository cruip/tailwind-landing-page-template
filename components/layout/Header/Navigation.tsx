"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

interface NavigationProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function Navigation({ onLinkClick, isMobile = false }: NavigationProps) {
  const t = useTranslations();
  const locale = useLocale();

  const navLinks = [
    { href: "#app", label: t("nav.app") },
    { href: "#partnership", label: t("nav.partnership") },
    { href: "#about", label: t("nav.about") },
    { href: "#menu", label: t("nav.menu") },
    { href: "#stores", label: t("nav.stores") },
    { href: "#career", label: t("nav.career") },
  ];

  const baseClasses = "text-sm text-white transition hover:text-gray-300";
  const mobileClasses = baseClasses;
  const desktopClasses = `${baseClasses} whitespace-nowrap`;

  if (isMobile) {
    return (
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={mobileClasses}
            onClick={onLinkClick}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden items-center justify-center gap-4 lg:gap-6 md:flex flex-1 min-w-0">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={desktopClasses}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
