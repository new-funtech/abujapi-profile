"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { useRegisterMutation } from "@/services/authApi";
import { toast } from "react-toastify";
import { registerSchema } from "@/schemas/authSchema";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = registerSchema.safeParse({ name, email, password });
    if (!result.success) {
      const firstError = result.error.errors[0];
      const errorMsg = firstError?.message || "Invalid input";
      toast.error(errorMsg);
      return;
    }

    try {
      const response = await register(result.data).unwrap();
      toast.success(response.message || "Registration successful");
    } catch (err) {
      if (
        typeof err === "object" &&
        err !== null &&
        "data" in err &&
        typeof err.data === "object" &&
        err.data !== null &&
        "message" in err.data
      ) {
        toast.error(String(err.data.message));
      } else {
        toast.error("Registration failed");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-sky-50 to-sky-100 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create an Account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          >
            {isLoading ? "Registering..." : "Sign Up"}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
