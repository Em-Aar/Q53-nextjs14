import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyToken } from "./helpers/verifyToken";
// logic
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/register" || path === "/login";
  console.log(path);
  const token = request.cookies.get("AccessToken")?.value || "";

  // user without token trying to access dashboard (protected path) will be redirected to login.
  if (!isPublic && !token) {
    console.log("1");
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // if user has a token, we have to verify the validity of the token.
  // we will use jose to verify the token. Check helpers/verifyToken.ts for more details.
  if (token) {
    const userName = (await verifyToken(token)) as string;
    const isVerfied = userName ? true : false;

    if (!isVerfied && !isPublic) {
      // if the token is not valid, we will redirect the user to login page.
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    } else if (isPublic && isVerfied) {
      // if user with verified token tries to access login, we have to stop it
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    } else {
      // for remaining cases(verfied token and protected route) forward the request with headers
      // lets send name of the user in headers. It will be displayed in dashboard
      const response = NextResponse.next();
      response.cookies.set("user", userName, { httpOnly: true });
      return response;
    }
  }
  return NextResponse.next();
}

// protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/register", "/login"],
};
