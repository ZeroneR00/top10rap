import { headers } from "next/headers"
import { auth } from "@/app/lib/auth"

export default async function BannedPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-8">
            <div className="max-w-md w-full bg-gray-900 border border-red-900 rounded-2xl p-8 text-center">
                <h1 className="text-3xl font-black text-red-500 mb-4">Аккаунт заблокирован</h1>
                <p className="text-gray-300 mb-2">
                    {session?.user.banReason ?? "Причина не указана"}
                </p>
                {session?.user.banExpires && (
                    <p className="text-gray-500 text-sm">
                        Блокировка до: {new Date(session.user.banExpires).toLocaleDateString('ru-RU', {
                            day: 'numeric', month: 'long', year: 'numeric'
                        })}
                    </p>
                )}
            </div>
        </main>
    )
}
