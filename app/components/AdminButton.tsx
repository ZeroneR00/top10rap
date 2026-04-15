'use client'

import Link from "next/link"
import { authClient } from "../lib/auth-client"


export default function AdminButton() {
    const {
        data: session,
    } = authClient.useSession()

    return (
        <>
         {session?.user.role === ("ADMIN") ? (
           
           <Link href="/admin" className="hover:text-red-00">АДМИНКА</Link>

         ): ("")}
        </>
    )
}