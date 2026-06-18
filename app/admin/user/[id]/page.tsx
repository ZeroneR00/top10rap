import { adminUserBanAction } from "@/app/actions/adminUserBanAction";
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AdminUserRedact({params} : {params: Promise<{id: string}>}) {

    const {id} = await params

    const user = await prisma.user.findFirst({
        where: {
            id: id
        }
    })

    if (!user) {
        notFound()
    }

    return (
        <main>
            <div className="mb-8 border-b border-gray-800 pb-6">
                <Link href="/admin" className="text-gray-500 hover:text-white text-sm mb-4 inline-block">
                    ← Назад в админку
                </Link>
                <h1 className="text-4xl font-black">Редактировать пользователя</h1>
            </div>
            {user.email}
            <form action={adminUserBanAction.bind(null, user.id)}>
                <button>Забанить пользователя</button>
            </form>
        </main>
    )
}