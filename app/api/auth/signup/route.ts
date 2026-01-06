import { NextRequest, NextResponse } from 'next/server';
import * as authApi from '@/lib/api/auth';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as authApi.SignupData;
    const response = await authApi.signup(body);
    return NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Signup failed' },
      { status: error.response?.status || 500 }
    );
  }
}
