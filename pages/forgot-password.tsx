import { useState } from 'react';
import { AuthLayout } from '@/components/auth/authlayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setError('Please enter your email address');
      return;
    }
    
    setStatus('loading');
    setError('');

    try {
      await forgotPassword(email);
      setStatus('success');
    } catch (error: any) {
      setStatus('error');
      setError(error.message || 'Failed to send reset email. Please try again.');
    }
  };

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
        {status === 'success' ? (
          <div className="rounded-xl bg-green-50 dark:bg-green-900/50 p-4 text-sm">
            <div className="flex">
              <svg className="h-5 w-5 text-green-400 dark:text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Request submitted!</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                  If an account exists with this email, you will receive password reset instructions shortly.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-xl bg-red-50 dark:bg-red-900/50 p-4 text-sm">
                <div className="flex">
                  <svg className="h-5 w-5 text-red-400 dark:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-3 text-red-700 dark:text-red-400">{error}</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <Input
                label="Email address"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={<EnvelopeIcon className="h-5 w-5" />}
              />
            </div>

            <Button
              type="submit"
              loading={status === 'loading'}
              fullWidth
              size="lg"
            >
              Send reset link
            </Button>
          </form>
        )}
      </div>
    </AuthLayout>
  );
}
