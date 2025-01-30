import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authService } from '@/services/api';
import { setAuthTokens, removeAuthTokens, getAuthTokens } from '@/utils/cookies';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { name: string; email: string; password: string; phone: string }) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string, confirmPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { token } = getAuthTokens();
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await authService.getProfile();
      if (response.data?.user) {
        setUser(response.data.user);
      } else {
        removeAuthTokens();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      removeAuthTokens();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await authService.login({ email, password });
      if (!data.user || !data.token) {
        throw new Error('Invalid response from server');
      }
      setUser(data.user);
      setAuthTokens(data.token, data.refreshToken);
      router.push('/dashboard'); // Add explicit redirect
    } catch (error) {
      console.error('Login failed:', error);
      removeAuthTokens();
      throw error;
    }
  };

  const register = async (data: { name: string; email: string; password: string; phone: string }) => {
    try {
      const response = await authService.register(data);
      if (!response.data?.user || !response.data?.token) {
        throw new Error('Invalid response from server');
      }
      setUser(response.data.user);
      setAuthTokens(response.data.token, response.data.refreshToken);
      // Let middleware handle the redirect
    } catch (error) {
      console.error('Registration failed:', error);
      removeAuthTokens();
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setUser(null);
      removeAuthTokens();
      router.push('/login');
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await authService.forgotPassword(email);
    } catch (error) {
      console.error('Forgot password request failed:', error);
      throw error;
    }
  };

  const resetPassword = async (token: string, password: string, confirmPassword: string) => {
    try {
      await authService.resetPassword(token, { password, confirmPassword });
      router.push('/login?reset=true');
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
    </div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
