import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "id"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`),
  );

  if (pathnameIsMissingLocale) {
    const defaultLocale = "en";
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
