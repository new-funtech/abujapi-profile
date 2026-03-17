import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "auth_token";
const BACKEND_URL = "https://admin.bpdabujapijabar.or.id/api";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const backendResponse = await fetch(`${BACKEND_URL}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!backendResponse.ok) {
      // Token is invalid or expired — clear it
      const response = NextResponse.json({ user: null }, { status: 401 });
      response.cookies.set(AUTH_COOKIE_NAME, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 0,
        path: "/",
      });
      return response;
    }

    const data = await backendResponse.json();
    return NextResponse.json({ user: data.user ?? data.data ?? data });
  } catch {
    return NextResponse.json(
      { message: "Gagal memverifikasi sesi." },
      { status: 500 }
    );
  }
}
