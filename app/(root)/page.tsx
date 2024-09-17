'use client'; // Mark this as a Client Component

import { UserButton, useClerk } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

const Home = () => {
  const router = useRouter();
  const { session } = useClerk(); // Hook to get the session and Clerk instance

  useEffect(() => {
    if (!session) {
      // If no session, the user has signed out, redirect them
      router.push('/');
    }
  }, [session, router]);

  return (
    <div>
      <p>Home</p>
      
    </div>
  );
};

export default Home;
