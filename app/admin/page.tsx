import { prisma } from "@/app/lib/prisma"
import Link from "next/link"
import AdminNewsCard from "../components/AdminNewsCard"
import { adminNewsDelete } from "../actions/adminNewsDeleteAction"


export default async function AdminPage() {
    const news = await prisma.news.findMany({
        orderBy: { createdAt: 'desc' }
    })
    return (
        <main className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-10 border-b border-gray-800 pb-6">
                    <h1 className="text-4xl font-black">Админ панель</h1>
                    <p className="text-gray-500 mt-1">Управление новостями</p>
                </div>

                {/* Кнопка создать */}

                <div className="mb-4">
                    <Link href="/admin/news/create">
                        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold">
                            + Добавить новость
                        </button>
                    </Link>
                </div>

                <div className="mb-8">
                    <Link href="/admin/user">
                        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold">
                            Посмотреть пользователей
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-5">
                        <div className="flex flex-col gap-4">
                            {news.map((n) => (
                                <div key={n.id} >
                                    <Link
                                        href={`/news/${n.id}`}
                                        className="group block"
                                    >
                                        <AdminNewsCard newsItem={n} />
                                    </Link>
                                    <div className="flex gap-3 mt-3">
                                        <button type="button" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm">
                                            Редактировать
                                        </button>
                                        <form action={adminNewsDelete.bind(null, n.id)}>
                                            <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 text-sm">
                                                Удалить
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {news.length === 0 && (
                        <p className="text-gray-500 text-center py-20">Новостей пока нет</p>
                    )}
                </div>
            </div>
        </main>
    )
}
