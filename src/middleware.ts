import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

// const protectedRoutes = ["/user-info"];

export default async function middleware(request: NextRequest) {
  if(!request.nextUrl.pathname.startsWith("/api/auth")){
    return NextResponse.next();
  }
  const session = await auth();

  // const { pathname } = request.nextUrl;

  // const isProtected = protectedRoutes.some((route) =>
  //   pathname.startsWith(route)
  // );

  if (!session) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  return NextResponse.next();
}
