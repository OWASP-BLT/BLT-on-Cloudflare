import { NextResponse } from "next/server";

export async function GET() {
  // TODO: return the current authenticated user
  return NextResponse.json({ user: null });
}


