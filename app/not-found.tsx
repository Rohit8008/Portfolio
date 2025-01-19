'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050709]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="mt-8">
        <p className="text-white text-xl font-medium">
          Redirecting you to homepage...
        </p>
      </div>
      <div className="mt-6">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );
} 