import { NextRequest, NextResponse } from 'next/server';
import * as authApi from '@/lib/api/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await authApi.getCurrentUser();
    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { user: null, error: 'Not authenticated' },
      { status: 401 }
    );
  }
}
