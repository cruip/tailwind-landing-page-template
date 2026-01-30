"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function HtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    // Set lang attribute dynamically based on locale
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
