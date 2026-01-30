"use client";

import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function UserMenu() {
  const t = useTranslations();

  return (
    <Link href="#get-app" className="hidden md:block">
      <Button variant="primary" size="lg">
        {t("header.getApp")}
      </Button>
    </Link>
  );
}
