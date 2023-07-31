import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });
  if (req.nextUrl.pathname.includes("/dashboard")) {
    if (token == null) {
      const url = new URL("/login", req.url);
      return NextResponse.redirect(url);
    }
    if (
      token.userRole === "ADMIN" ||
      token.userRole === "SPECIES_ADMIN" ||
      token.userRole === "NURSERY_ADMIN"
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }
  if (req.nextUrl.pathname === "/login") {
    if (token != null) {
      return NextResponse.redirect(new URL("/home", req.url));
    } else {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/home", req.url));
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/login"],
};
