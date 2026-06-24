import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/app/lib/auth";


export async function proxy(request: NextRequest) {

	const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log("path:", request.nextUrl.pathname, "banned:", session?.user.banned)


    if (session?.user.banned === true && request.nextUrl.pathname !== "/banned") {
        return NextResponse.redirect(new URL("/banned", request.url));
    }

	if (request.nextUrl.pathname.startsWith("/admin") && (!session || session?.user.role !== "admin")) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    
    return NextResponse.next();
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}