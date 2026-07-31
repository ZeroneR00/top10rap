'use client'
import { authClient } from "@/app/lib/auth-client";
import { UserWithRole } from "better-auth/client/plugins";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AdminUserPage() {
    const [users, setUsers] = useState<UserWithRole[]>([])
    useEffect(() => {
        authClient.admin.listUsers({
            query: {
                limit: 10
            }
        }).then((data) => {
            setUsers(data.data?.users ?? [])
        })
    }, [])

    return (
        <main className="min-h-screen bg-gray-950 text-white p-8">
            <div className="mb-8 border-b border-gray-700 pb-6">
                <Link href="/admin" className="text-gray-500 hover:text-white text-sm mb-4 inline-block">
                    ← Назад в админку
                </Link>
                <h1 className="text-3xl font-black">Пользователи</h1>
            </div>
            {users.map(user =>
                <div key={user.id} className="flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center gap-2 border border-gray-8 p-2 m-5">
                        <span className="font-bold font-size-26">Имя</span>
                        <div>{user.name}</div>
                    </div>
                    <div className="flex items-center gap-2 pb-2 m-5">
                        <span className="font-bold font-size-26">Имейл</span>
                        <div>{user.email}</div>
                    </div>
                    <div className="flex items-center gap-2 m-5">
                        <span className="font-bold justify-center font-size-26">Права доступа</span>
                        <div >{user.role}</div>
                    </div>
                    
                    <Link href={`/admin/user/${user.id}`} className="text-blue-500 hover:text-blue-400">
                        Изменить
                    </Link>
                </div>
            )}
        </main>
    )
}