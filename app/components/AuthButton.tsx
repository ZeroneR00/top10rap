'use client'

import { authClient } from "../lib/auth-client"
import { useState } from 'react'
import AuthModal from './AuthModal'

export default function AuthButton() {
    const [isOpen, setIsOpen] = useState(false)

    const {
        data: session,
    } = authClient.useSession()

    // if (isPending) return <div>Loading...</div>
    // if (error) return <div>Error: {error.message}</div>

    return (
        <>
            {session ? (
                <div className="flex items-center gap-2 bg-gray-900/60 border border-gray-700 rounded-full pl-1.5 pr-2 py-1.5">
                    <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {session.user.name?.[0]?.toUpperCase() ?? '?'}
                    </div>
                    <span className="text-sm text-gray-200 max-w-40 truncate">{session.user.name}</span>
                    <button
                        className="px-3 py-1 bg-red-600 rounded-full text-xs font-semibold hover:bg-red-700 transition-colors"
                        onClick={() => authClient.signOut()}
                    >
                        Выйти
                    </button>
                </div>
            ) : (
                <>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
                    >
                        Войти
                    </button>
                    <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </>
            )}
        </>
    )
}