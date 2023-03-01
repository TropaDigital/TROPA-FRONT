import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.cookies["AuthorizedTropaAdmin"]) {
    return NextResponse.rewrite("/painel");
  }

  return;
}
