/**
 * Authentication API endpoints
 * Connects to Django REST Framework auth endpoints
 */

import Cookies from 'js-cookie';
import { apiClient } from './client';

// ✅ CENTRALIZED CONFIGURATION
// ✅ FIX: Use NEXT_PUBLIC_ENVIRONMENT instead of NODE_ENV for Cloudflare compatibility
const IS_PRODUCTION = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

const COOKIE_OPTIONS = {
  access_token: {
    expires: 1, // 1 Day
    secure: IS_PRODUCTION, // HTTPS only in production
    sameSite: 'strict' as const, // Protects against CSRF
  },
  refresh_token: {
    expires: 7, // 7 Days
    secure: IS_PRODUCTION,
    sameSite: 'strict' as const,
  },
};

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user?: {
    id: number;
    username: string;
    email: string;
    // Add other user fields from Django User model
  };
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  is_staff?: boolean;
  is_active?: boolean;
  date_joined?: string;
  // Add other fields from BLT UserProfile model
}

/**
 * Login user and store JWT tokens
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>('/auth/login/', credentials);
  
  // ✅ UPDATED: Uses centralized config
  Cookies.set('access_token', response.access, COOKIE_OPTIONS.access_token);
  Cookies.set('refresh_token', response.refresh, COOKIE_OPTIONS.refresh_token);

  return response;
}

/**
 * Signup new user
 */
export async function signup(data: SignupData): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>('/auth/signup/', data);
  
  // ✅ UPDATED: Uses centralized config (Fixed the missing 'secure' flag issue)
  Cookies.set('access_token', response.access, COOKIE_OPTIONS.access_token);
  Cookies.set('refresh_token', response.refresh, COOKIE_OPTIONS.refresh_token);
  
  return response;
}

/**
 * Logout user (clear tokens)
 */
export async function logout(): Promise<void> {
  try {
    await apiClient.post('/auth/logout/');
  } catch (error) {
    // Even if API call fails, clear local tokens
    console.error('Logout API error:', error);
  } finally {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
  }
}

/**
 * Get current authenticated user
 * Returns null if not authenticated (401 response)
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    return await apiClient.get<User>('/auth/me/');
  } catch (error) {
    // Return null for unauthenticated (401) or other errors
    return null;
  }
}

/**
 * Refresh access token
 */
export async function refreshToken(): Promise<{ access: string }> {
  const refreshToken = Cookies.get('refresh_token');
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await apiClient.post<{ access: string }>('/auth/refresh/', {
    refresh: refreshToken,
  });

  // ✅ UPDATED: Uses centralized config
  Cookies.set('access_token', response.access, COOKIE_OPTIONS.access_token);

  return response;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!Cookies.get('access_token');
}