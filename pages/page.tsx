import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <Link 
          href="/auth/login" 
          className="text-primary hover:underline"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}