"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { loginSchema } from "@/schemas/authSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const firstError = result.error.errors[0];
      const translatedMsg = t(firstError?.message) || "Input tidak valid";
      toast.error(translatedMsg);
      return;
    }

    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (res?.ok && !res.error) {
      toast.success(t("signin.success") || "Berhasil login");
      router.push("/users");
    } else {
      toast.error(
        t("signin.failed") || "Gagal login. Silakan periksa kembali.",
      );
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50 to-sky-100 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {t("signin.welcome") || "Selamat Datang"}
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <Input
            label={t("signin.email") || "Email"}
            name="email"
            type="email"
            placeholder={t("signin.emailPlaceholder") || "Masukkan email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label={t("signin.password") || "Password"}
            name="password"
            type="password"
            placeholder={t("signin.passwordPlaceholder") || "Masukkan password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading
              ? t("signin.loading") || "Memuat..."
              : t("signin.button") || "Masuk"}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          {t("signin.noAccount") || "Belum punya akun?"}{" "}
          <Link
            href="/auth/sign-up"
            className="text-blue-600 font-medium hover:underline"
          >
            {t("signin.signup") || "Daftar sekarang"}
          </Link>
        </p>
      </div>
    </main>
  );
}
