import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "https://admin.bpdabujapijabar.or.id/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email dan kata sandi wajib diisi." },
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
        { message: data.message || "Login gagal. Periksa kembali email dan kata sandi Anda." },
        { status: backendResponse.status }
      );
    }

    const token: string = data.token ?? data.access_token ?? "";
    const user = data.user ?? data.data ?? null;

    const response = NextResponse.json(
      { message: "Login berhasil.", user },
      { status: 200 }
    );

    // Store token in a secure, httpOnly cookie
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: unknown) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
