import { NextResponse } from "next/server";

export async function POST() {
  // TODO: hook into your Cloudflare Worker / backend auth
  return NextResponse.json({ ok: true });
}


