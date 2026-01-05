import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/api/webhook']);

export default clerkMiddleware(async (auth, req) => {
	// Redirect authenticated users away from landing page
	if ((await auth()).userId && isPublicRoute(req)) {
		const redirectToDash = new URL('/dashboard', req.url);
		return NextResponse.redirect(redirectToDash);
	}
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


