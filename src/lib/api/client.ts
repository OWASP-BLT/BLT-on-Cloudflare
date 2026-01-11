/**
 * API Client for Django REST Framework Backend with JWT Cookie Auth
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';

class APIClient {
  private client: AxiosInstance;

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
            // Attempt to refresh access token using refresh token
            const refreshToken = Cookies.get('refresh_token');
            if (!refreshToken) {
              throw new Error('No refresh token available');
            }

            const response = await axios.post(
              `${API_BASE_URL}/auth/refresh/`,
              { refresh: refreshToken }
            );

            // Update access token cookie
            Cookies.set('access_token', response.data.access, {
              expires: 1,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict',
            });

            // Retry original request
            return this.client(originalRequest);
          } catch (refreshError) {
            // Refresh failed, redirect to login
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');
            
            if (typeof window !== 'undefined') {
              window.location.href = '/login';
            }
            
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
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