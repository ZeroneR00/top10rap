'use client'

import { authClient } from "../lib/auth-client"
import { useState } from 'react'
import AuthModal from './AuthModal'

export default function AuthButton() {
    const [isOpen, setIsOpen] = useState(false)

    const {
        data: session,
        isPending,
        error
    } = authClient.useSession()

    // if (isPending) return <div>Loading...</div>
    // if (error) return <div>Error: {error.message}</div>

    return (
        <>
            {session ? (
                <div className="flex items-center gap-4">
                    <span className="text-white">Привет, {session.user.name}!</span>
                    <button
                        className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
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