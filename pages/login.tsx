// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { AuthLayout } from '@/components/auth/authlayout';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { useAuth } from '@/contexts/AuthContext';
// import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { login } = useAuth();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors({});

//     try {
//       await login(formData.email, formData.password);
//       // Let middleware handle the redirect
//     } catch (error: any) {
//       setErrors({
//         submit: error.response?.data?.message || 'Login failed. Please try again.'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthLayout
//       title="Sign in to your account"
//       subtitle={
//         <div className="text-sm text-gray-600 dark:text-gray-400">
//           Don't have an account?{' '}
//           <Link href="/register" className="font-medium text-primary-600 hover:text-primary-500">
//             Sign up
//           </Link>
//         </div>
//       }
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errors.submit && (
//           <div className="rounded-xl bg-red-50 dark:bg-red-900/50 p-4 text-sm">
//             <div className="flex">
//               <svg className="h-5 w-5 text-red-400 dark:text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               <p className="ml-3 text-red-700 dark:text-red-400">{errors.submit}</p>
//             </div>
//           </div>
//         )}

//         <div className="space-y-5">
//           <Input
//             label="Email address"
//             name="email"
//             type="email"
//             autoComplete="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             error={errors.email}
//             icon={<EnvelopeIcon className="h-5 w-5" />}
//           />

//           <Input
//             label="Password"
//             name="password"
//             type="password"
//             autoComplete="current-password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             error={errors.password}
//             icon={<LockClosedIcon className="h-5 w-5" />}
//           />

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link href="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500">
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>
//         </div>

//         <Button
//           type="submit"
//           loading={loading}
//           fullWidth
//           size="lg"
//         >
//           Sign in
//         </Button>

        
//       </form>
//     </AuthLayout>
//   );
// }

export default function Login(){
  return (
    <div>
      ritesh
    </div>
  )
}