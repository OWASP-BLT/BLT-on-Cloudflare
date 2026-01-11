import { NextRequest, NextResponse } from 'next/server';
import * as authApi from '@/lib/api/auth';

export async function POST(request: NextRequest) {
  try {
    await authApi.logout();
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Logout failed' },
      { status: error.response?.status || 500 }
    );
  }
}
