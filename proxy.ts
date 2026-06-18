import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/app/lib/auth";


export async function proxy(request: NextRequest) {

	const session = await auth.api.getSession({
        headers: await headers()
    })

	if(!session || session?.user.role !== "admin") {
        return NextResponse.next();
        // return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
}

export const config = {
	matcher: ['/admin/:path*']
}
