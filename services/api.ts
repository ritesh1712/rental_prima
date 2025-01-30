import axios from 'axios';
import { getAuthTokens, setAuthTokens, removeAuthTokens } from '@/utils/cookies';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1` || 'http://localhost:3001/api/v1';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const { token } = getAuthTokens();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is not 401 or we already tried to refresh, reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    try {
      originalRequest._retry = true;
      const { refreshToken } = getAuthTokens();
      
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await api.post('/auth/refresh-token', { refreshToken });
      const { token: newToken, refreshToken: newRefreshToken } = response.data;
      
      if (!newToken || !newRefreshToken) {
        throw new Error('Invalid refresh token response');
      }

      setAuthTokens(newToken, newRefreshToken);
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      
      return api(originalRequest);
    } catch (refreshError) {
      removeAuthTokens();
      window.location.href = '/login';
      return Promise.reject(refreshError);
    }
  }
);

export const authService = {
  async login(data: { email: string; password: string }) {
    try {
      const response = await api.post('/auth/login', data);
      const { success, user, token } = response.data;
      
      if (!success || !user || !token) {
        throw new Error(response.data.message || 'Invalid login response');
      }

      setAuthTokens(token, token); // Use the same token as refresh token for now
      return { data: { user, token, refreshToken: token } };
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },

  async register(data: { name: string; email: string; password: string; phone: string }) {
    const response = await api.post('/auth/register', data);
    const { token, refreshToken } = response.data;
    
    if (!token || !refreshToken) {
      throw new Error('Invalid registration response');
    }

    setAuthTokens(token, refreshToken);
    return response;
  },

  async logout() {
    try {
      const response = await api.post('/auth/logout');
      removeAuthTokens();
      return response;
    } catch (error) {
      removeAuthTokens();
      throw error;
    }
  },

  async forgotPassword(email: string) {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      const { success, message } = response.data;
      
      if (!success) {
        throw new Error(message || 'Failed to process password reset request');
      }
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },

  async resetPassword(token: string, data: { password: string; confirmPassword: string }) {
    return api.post(`/auth/reset-password/${token}`, data);
  },

  async getProfile() {
    return api.get('/users/profile');
  },
};

export const userService = {
  async getUsers(page = 1, limit = 10) {
    return api.get('/users', { params: { page, limit } });
  },

  async getUser(id: string) {
    return api.get(`/users/${id}`);
  },

  async updateUser(id: string, data: { name?: string; phone?: string }) {
    return api.put(`/users/${id}`, data);
  },

  async deleteUser(id: string) {
    return api.delete(`/users/${id}`);
  },

  async verifyPhone(code: string) {
    return api.post('/users/verify-phone', { code });
  },
};

export default api;
