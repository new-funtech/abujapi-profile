import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/store/provider";
import AuthSessionProvider from "@/components/SessionProvider";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  description: "A modern Next.js starter with TypeScript and JWT auth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <AuthSessionProvider>
          <Providers>
            {children}
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              toastClassName="rounded-xl shadow-lg text-sm"
              className="z-[9999] !top-6"
            />
          </Providers>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
