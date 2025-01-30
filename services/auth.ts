import axios from 'axios';

// Since we're using Next.js API routes, we don't need to specify the full URL
// Just use the relative path
const API_URL = '/api';

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const changePassword = async (data: ChangePasswordData): Promise<{ message: string }> => {
  try {
    const response = await axios.post(`${API_URL}/auth/change-password`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to change password');
    }
    throw new Error('Network error occurred');
  }
};
