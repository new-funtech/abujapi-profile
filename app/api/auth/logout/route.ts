import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "auth_token";
const BACKEND_URL = "https://admin.bpdabujapijabar.or.id/api";

export async function POST(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  // Attempt to invalidate the token on the backend, but don't block logout on failure
  if (token) {
    try {
      await fetch(`${BACKEND_URL}/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
    } catch {
      // Ignore errors from backend logout; we still clear the cookie
    }
  }

  const response = NextResponse.json({ message: "Logout berhasil." });

  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return response;
}
