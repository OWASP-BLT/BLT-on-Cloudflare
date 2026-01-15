/**
 * Authentication API endpoints
 * Connects to Django REST Framework auth endpoints
 */

import { apiClient } from './api/client';
import Cookies from 'js-cookie';

// ✅ CENTRALIZED CONFIGURATION
const COOKIE_OPTIONS = {
  access_token: {
    expires: 7, // 7 Days for token auth
    secure: true, // Always HTTPS in production
    sameSite: 'strict' as const,
    path: '/',
  },
};

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export interface AuthResponse {
  key?: string; // Token auth returns 'key'
  token?: string; // Alternative response format
  id?: number;
  user?: User;
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
}

/**
 * Login user and store token
 * Endpoint: POST /auth/login/
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>('/auth/login/', credentials);
  
  // Handle both 'key' and 'token' response formats
  const token = response.key || response.token;
  if (token) {
    Cookies.set('auth_token', token, COOKIE_OPTIONS.access_token);
  }
  
  return response;
}

/**
 * Signup new user
 * Endpoint: POST /auth/registration/
 * Note: Backend requires email verification before login
 */
export async function signup(data: SignupData): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>('/auth/registration/', data);
  
  // Token might be returned immediately or after email verification
  const token = response.key || response.token;
  if (token) {
    Cookies.set('auth_token', token, COOKIE_OPTIONS.access_token);
  }
  
  return response;
}

/**
 * Logout user (clear tokens)
 * Endpoint: POST /auth/logout/
 */
export async function logout(): Promise<void> {
  try {
    // Call logout endpoint to invalidate token on server
    await apiClient.post('/auth/logout/', {});
  } catch (error) {
    // Even if API call fails, clear local tokens
    console.error('Logout API error:', error);
  } finally {
    Cookies.remove('auth_token');
  }
}

/**
 * Get current authenticated user
 * Endpoint: GET /auth/me/
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    return await apiClient.get<User>('/auth/me/');
  } catch (error) {
    // If not authenticated, return null
    return null;
  }
}

/**
 * Request password reset
 * Endpoint: POST /auth/password/reset/
 */
export async function requestPasswordReset(email: string): Promise<{ detail: string }> {
  return apiClient.post('/auth/password/reset/', { email });
}

/**
 * Confirm password reset
 * Endpoint: POST /auth/password/reset/confirm/
 */
export async function confirmPasswordReset(data: {
  uid: string;
  token: string;
  new_password1: string;
  new_password2: string;
}): Promise<{ detail: string }> {
  return apiClient.post('/auth/password/reset/confirm/', data);
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!Cookies.get('auth_token');
}