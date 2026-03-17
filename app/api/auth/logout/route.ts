import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const BACKEND_URL = "https://admin.bpdabujapijabar.or.id/api";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  // Attempt to invalidate token on the backend (best-effort)
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
      // Ignore backend errors – clear the cookie regardless
    }
  }

  const response = NextResponse.json(
    { message: "Logout berhasil." },
    { status: 200 }
  );

  // Clear the auth cookie
  response.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
