'use client'

import Link from "next/link"
import { authClient } from "../lib/auth-client"


export default function AdminButton() {
    const {
        data: session,
    } = authClient.useSession()

    if (session?.user.role !== "admin") return null

    return (
        <Link
            href="/admin"
            className="px-3 py-1.5 bg-red-950 border border-red-800 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-900 hover:text-red-300 transition-colors"
        >
            Админка
        </Link>
    )
}