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
            <div className="mb-8 border-b border-gray-800 pb-6">
                <Link href="/admin" className="text-gray-500 hover:text-white text-sm mb-4 inline-block">
                    ← Назад в админку
                </Link>
                <h1 className="text-4xl font-black">Пользователи</h1>
            </div>
            {users.map(user =>
                <div key={user.id}>
                    <div>
                        <span>Имя</span>
                        <div>{user.name}</div>
                    </div>
                    <div>
                        <span>Имейл</span>
                        <div>{user.email}</div>
                    </div>
                    <div>
                        <span>Права доступа</span>
                        <div >{user.role}</div>
                    </div>
                    <Link href={`/admin/user/${user.id}`}>
                        Изменить
                    </Link>
                </div>

            )}
        </main>
    )
}