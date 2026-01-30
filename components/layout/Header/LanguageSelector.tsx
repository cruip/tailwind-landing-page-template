"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

const languages = [
  { code: "vi", name: "Tiếng Việt", displayCode: "VI", flag: "🇻🇳" },
  { code: "en", name: "English", displayCode: "EN", flag: "🇺🇸" },
];

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    
    // Get the pathname without the current locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    
    // Navigate to the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white bg-gray-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800"
        aria-label="Select language"
        type="button"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage?.displayCode}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-32 rounded-lg border border-white/20 bg-gray-900 shadow-lg">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex w-full items-center gap-3 px-4 py-2 text-sm text-white transition hover:bg-white/10 ${
                  locale === lang.code ? "bg-white/5 font-medium" : ""
                }`}
                type="button"
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.displayCode}</span>
                {locale === lang.code && (
                  <svg
                    className="ml-auto h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
