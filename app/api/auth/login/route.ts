import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://admin.bpdabujapijabar.or.id/api";
const AUTH_COOKIE_NAME = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email dan password wajib diisi." },
        { status: 400 }
      );
    }

    const backendResponse = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { message: data.message || "Email atau password salah." },
        { status: backendResponse.status }
      );
    }

    const token: string = data.token ?? data.access_token ?? data.data?.token;

    if (!token) {
      return NextResponse.json(
        { message: "Token tidak ditemukan dalam respons server." },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      message: "Login berhasil.",
      user: data.user ?? data.data?.user,
    });

    response.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Terjadi kesalahan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
