/**
 * API Client for Django REST Framework Backend with JWT Cookie Auth
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';
const IS_PRODUCTION = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

class APIClient {
  private client: AxiosInstance;
  private refreshTokenPromise: Promise<string> | null = null; // ✅ FIX: Prevent race condition on token refresh

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,  // ✅ Cookies sent automatically
    });

    // Response interceptor to handle token refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // ✅ FIX: Use promise-based lock to prevent multiple simultaneous refresh attempts
            const accessToken = await this.getOrRefreshToken();
            
            // Retry original request with new token
            return this.client(originalRequest);
          } catch (refreshError) {
            // Refresh failed, clear tokens
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');
            
            // ✅ FIX: Don't redirect from API layer - let UI handle navigation
            // Components should listen to auth state changes and redirect as needed
            // If needed for hard redirect, emit custom event instead:
            if (typeof window !== 'undefined') {
              const event = new CustomEvent('auth:unauthorized');
              window.dispatchEvent(event);
            }
            
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * ✅ FIX: Implement race condition prevention for token refresh
   * Only one refresh request runs at a time; others wait for the result
   */
  private async getOrRefreshToken(): Promise<string> {
    // If refresh is already in progress, wait for it
    if (this.refreshTokenPromise) {
      await this.refreshTokenPromise;
      return Cookies.get('access_token') || '';
    }

    // Start new refresh process
    this.refreshTokenPromise = this.performTokenRefresh();
    
    try {
      await this.refreshTokenPromise;
      return Cookies.get('access_token') || '';
    } finally {
      this.refreshTokenPromise = null; // Clear the lock
    }
  }

  /**
   * Perform the actual token refresh with fresh token
   */
  private async performTokenRefresh(): Promise<string> {
    const refreshToken = Cookies.get('refresh_token');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await axios.post(
      `${API_BASE_URL}/auth/refresh/`,
      { refresh: refreshToken }
    );

    // ✅ FIX: Use standardized NEXT_PUBLIC_ENVIRONMENT for production check
    Cookies.set('access_token', response.data.access, {
      expires: 1,
      secure: IS_PRODUCTION,
      sameSite: 'strict',
    });

    return response.data.access;
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const apiClient = new APIClient();