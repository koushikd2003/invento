import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

export function middleware(req: { nextUrl: { clone: () => any; }; }) {
  const url = req.nextUrl.clone();

  // Check if the request is to a public route
  if (url.pathname.startsWith('/api/webhooks/clerk')) {
    return NextResponse.next();
  }

  // Apply Clerk middleware logic for protected routes
  // For example:
  // if (!clerkClient.isAuthenticated(req)) {
  //   return NextResponse.redirect('/sign-in');
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
