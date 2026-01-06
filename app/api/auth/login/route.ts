import { NextRequest, NextResponse } from 'next/server';
import * as authApi from '@/lib/api/auth';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as authApi.LoginCredentials;
    const response = await authApi.login(body);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Login failed' },
      { status: error.response?.status || 500 }
    );
  }
}
