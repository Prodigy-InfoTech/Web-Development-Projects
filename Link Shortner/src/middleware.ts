import { Link } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  const link: Link = await (
    await fetch(`${request.nextUrl.origin}/api/${slug}`)
  ).json();
  return NextResponse.redirect(link.url);
}

export const config = {
  matcher: ["/r/:slug*"],
};
