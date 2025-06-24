import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/components/i18n-provider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Starter Kit",
  description: "A modern Next.js starter with TypeScript, i18n, and JWT auth.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={params.locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <I18nProvider locale={params.locale}>
          <main className="flex-grow">{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
