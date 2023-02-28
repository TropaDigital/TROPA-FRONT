import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if(req.nextUrl.pathname.startsWith("/painel/dashboard"))
  if(req.cookies["admin"]) return

  return NextResponse.rewrite("/painel")
}
