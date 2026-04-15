import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookieCache } from "better-auth/cookies";


export async function proxy(request: NextRequest) {
  
	const session = await getCookieCache(request);
      console.log(session)
	if (session?.user.role !== "ADMIN") {
		return NextResponse.redirect(new URL("/", request.url));
	}
	return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*']
}
