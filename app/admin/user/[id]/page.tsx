import { adminUserBanAction } from "@/app/actions/adminUserBanAction";
import { adminUnBanAction } from "@/app/actions/adminUnBanAction";
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AdminUserRedact({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

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
                <Link href="/admin/user" className="text-gray-500 hover:text-white text-sm mb-4 inline-block mt-10 ml-10">
                    ← Назад
                </Link>
                <h1 className="text-4xl font-black ml-8">Редактировать пользователя</h1>
            </div>
            <div className="ml-8 font-bold">
                <div>Имя:</div>
                <div className="ml-5"> {user.name} </div>
            </div>
            <div className="ml-8 font-bold">
                <div>Имейл:</div>
                <div className="ml-5"> {user.email} </div>
            </div>
            <div className="ml-8 font-bold">
                <div>Роль:</div>
                <div className="ml-5"> {user.role} </div>
            </div>
            <div className="ml-8 font-bold">
                <div>Бан:</div>
                <div className="ml-5"> {user.banned ? "Забанен" : "не забанен"} </div>
            </div>

            {user.banned ? (<form className="flex" action={adminUnBanAction.bind(null, user.id)}>
                <span className="bg-blue-500 ml-8 mt-10 p-3">
                    <button className="font-black z-10">Снять бан</button>
                </span>
            </form>) : (<form className="flex" action={adminUserBanAction.bind(null, user.id)}>
                <span className="bg-red-500 ml-8 mt-10 p-3">
                    <button className="font-black z-10">Забанить пользователя</button>
                </span>
            </form>)}

        </main>
    )
}