/**
 * API Client for Django REST Framework Backend
 * Connects to the Core BLT Django API
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
      withCredentials: false, // JWT doesn't need credentials
    });

    // Request interceptor to add token
    this.client.interceptors.request.use(
      (config) => {
        // Django REST Framework Token Auth uses 'Token <key>' format
        const token = Cookies.get('auth_token');
        if (token) {
          config.headers.Authorization = `Token ${token}`; // NOT Bearer!
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle token refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Only retry if 401 and not already retried
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // For Django Token Auth, we need to re-authenticate
            // Note: Django Token Auth doesn't have refresh endpoint like JWT
            // Solution: Clear cookies and redirect to login
            Cookies.remove('auth_token');
        
            if (typeof window !== 'undefined') {
              window.location.href = '/login';
            }
        
            return Promise.reject(new Error('Session expired. Please login again.'));
          } catch (refreshError) {
            Cookies.remove('auth_token');
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

