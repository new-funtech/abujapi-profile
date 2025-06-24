"use client";

import Button from "@/components/Button";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          🚀 {t("home.title")}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{t("home.description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">
          <FeatureItem
            title={t("home.features.typescript.title")}
            desc={t("home.features.typescript.desc")}
          />
          <FeatureItem
            title={t("home.features.eslint.title")}
            desc={t("home.features.eslint.desc")}
          />
          <FeatureItem
            title={t("home.features.jwt.title")}
            desc={t("home.features.jwt.desc")}
          />
          <FeatureItem
            title={t("home.features.rtk.title")}
            desc={t("home.features.rtk.desc")}
          />
          <FeatureItem
            title={t("home.features.husky.title")}
            desc={t("home.features.husky.desc")}
          />
        </div>

        <Button href="/login" variant="primary" size="md">
          {t("home.button")}
        </Button>
      </div>
    </main>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
