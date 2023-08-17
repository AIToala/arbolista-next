import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });
  const reqUrl = req.nextUrl.pathname;
  if (reqUrl === "/dashboard") {
    if (token == null) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (
      (token != null && token.userRole === "ADMIN") ||
      token.userRole === "SPECIES_ADMIN" ||
      token.userRole === "NURSERY_ADMIN"
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }
  if (
    (reqUrl.includes("/dashboard/usuario") ||
      reqUrl.includes("/dashboard/galeria")) &&
    token !== null &&
    token.userRole === "ADMIN"
  ) {
    return NextResponse.next();
  } else if (
    reqUrl.includes("/dashboard/especie") &&
    token !== null &&
    (token.userRole === "ADMIN" || token.userRole === "SPECIES_ADMIN")
  ) {
    return NextResponse.next();
  } else if (
    reqUrl.includes("/dashboard/vivero") &&
    token !== null &&
    (token.userRole === "ADMIN" || token.userRole === "NURSERY_ADMIN")
  ) {
    return NextResponse.next();
  }
  if (reqUrl === "/login" && token == null) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/login"],
};
