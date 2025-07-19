"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginSchema } from "@/schemas/authSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const firstError = result.error.errors[0];
      const errorMsg = firstError?.message || "Invalid input";
      toast.error(errorMsg);
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
      toast.success("Login successful");
      router.push("/users");
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50 to-sky-100 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
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
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </main>
  );
}
