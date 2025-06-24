"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useLoginMutation } from "@/services/authApi";

export default function SignInPage() {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation(); // ← RTK Query hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login({ email, password }).unwrap();
      toast.success("Login berhasil!");
      console.log("Login response:", data);
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || "Login gagal");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50 to-sky-100 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {t("signin.welcome")}
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <Input
            label={t("signin.email")}
            name="email"
            type="email"
            placeholder={t("signin.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label={t("signin.password")}
            name="password"
            type="password"
            placeholder={t("signin.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? t("signin.loading") : t("signin.button")}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          {t("signin.noAccount")}{" "}
          <Link
            href="/auth/sign-up"
            className="text-blue-600 font-medium hover:underline"
          >
            {t("signin.signup")}
          </Link>
        </p>
      </div>
    </main>
  );
}
