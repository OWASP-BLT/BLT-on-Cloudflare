import { NextResponse } from "next/server";

export async function POST() {
  // TODO: clear auth cookies / session
  return NextResponse.json({ ok: true });
}


