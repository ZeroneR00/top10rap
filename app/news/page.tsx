import { prisma } from "@/app/lib/prisma"
import Link from "next/link"
import NewBanner from "../components/NewBanner"

export default async function News() {
    const news = await prisma.news.findMany({
        orderBy: { createdAt: 'desc' }
    })

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 md:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-10 border-b border-gray-800 pb-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">Последние события</p>
                    <h1 className="text-5xl font-black text-white">Новости</h1>
                </div>

                {/* News List */}
                <div className="flex flex-col gap-4">
                    {news.map((n) => (
                        <Link
                            key={n.id}
                            href={`/news/${n.id}`}
                            className="group block"
                        >
                            <NewBanner neww={n} />
                        </Link>
                    ))}
                </div>

                {news.length === 0 && (
                    <p className="text-gray-500 text-center py-20">Новостей пока нет</p>
                )}
            </div>
        </main>
    )
}
