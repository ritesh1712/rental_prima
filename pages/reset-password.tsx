import { useState } from 'react';
import { useRouter } from 'next/router';
import { AuthLayout } from '@/components/auth/authlayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { resetPassword } = useAuth();
  const { token } = router.query;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      if (typeof token !== 'string') {
        throw new Error('Invalid reset token');
      }

      await resetPassword(token, formData.password, formData.confirmPassword);
      setSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error: any) {
      setErrors({
        submit: error.response?.data?.message || 'Failed to reset password. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        subtitle={
          <p>
            Return to{' '}
            <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        }
      >
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            The password reset link is invalid or has expired. Please request a new password reset link.
          </p>
          <Button
            className="mt-6"
            onClick={() => router.push('/forgot-password')}
          >
            Request New Link
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle={
        <p>
          Remember your password?{' '}
          <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </p>
      }
    >
      <div className="space-y-6">
        {success ? (
          <div className="rounded-xl bg-green-50 dark:bg-green-900/50 p-4 text-sm">
            <div className="flex">
              <svg className="h-5 w-5 text-green-400 dark:text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Success!</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                  Your password has been reset successfully. Redirecting to login...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.submit && (
              <div className="rounded-xl bg-red-50 dark:bg-red-900/50 p-4 text-sm">
                <div className="flex">
                  <svg className="h-5 w-5 text-red-400 dark:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-3 text-red-700 dark:text-red-400">{errors.submit}</p>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <Input
                label="New password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                icon={<LockClosedIcon className="h-5 w-5" />}
                helper="Must be at least 8 characters long"
              />

              <Input
                label="Confirm new password"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                icon={<LockClosedIcon className="h-5 w-5" />}
              />
            </div>

            <Button
              type="submit"
              loading={loading}
              fullWidth
              size="lg"
            >
              Reset password
            </Button>
          </form>
        )}
      </div>
    </AuthLayout>
  );
}
