"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const { i18n: i18next } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const changeLang = async () => {
      if (i18next.language !== locale) {
        await i18n.changeLanguage(locale);
      }
      setReady(true);
    };
    changeLang();
  }, [locale, i18next]);

  if (!ready) return null;

  return <>{children}</>;
}
