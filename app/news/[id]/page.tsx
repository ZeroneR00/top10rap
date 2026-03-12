import { prisma } from "@/app/lib/prisma"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Comments from "@/app/components/Comments"

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const news = await prisma.news.findFirst({
        where: { id },
        include: {
            comments: {
                include: { author: true },
                orderBy: { createdAt: 'desc' }
            }
        }
    })

    if (!news) notFound()

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 md:p-8">
            <div className="max-w-3xl mx-auto">

                {/* Back */}
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-8 transition-colors"
                >
                    ← Все новости
                </Link>

                {/* Article */}
                <article className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-3">
                        {new Date(news.createdAt).toLocaleDateString('ru-RU', {
                            day: 'numeric', month: 'long', year: 'numeric'
                        })}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                        {news.title}
                    </h1>
                    <div className="w-12 h-0.5 bg-purple-500 mb-6" />
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {news.mainText}
                    </p>
                </article>

                {/* Comments Section */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        Комментарии
                        <span className="text-sm font-normal text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                            {news.comments.length}
                        </span>
                    </h2>

                    {/* Comment Form placeholder — сюда придёт компонент */}
                    <div className="bg-gray-900 border border-dashed border-gray-700 rounded-2xl p-6 mb-6 text-center text-gray-600 text-sm">
                        <Comments newsId={news.id} />
                        Здесь будет форма комментариев
                    </div>

                    {/* Comments List */}
                    <div className="flex flex-col gap-4">
                        {news.comments.length === 0 && (
                            <p className="text-gray-600 text-center py-8">Будь первым — оставь комментарий!</p>
                        )}
                        {news.comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold text-white">
                                            {comment.author.name?.[0]?.toUpperCase() ?? '?'}
                                        </div>
                                        <span className="text-white font-semibold text-sm">
                                            {comment.author.name ?? 'Аноним'}
                                        </span>
                                    </div>
                                    <span className="text-gray-600 text-xs">
                                        {new Date(comment.createdAt).toLocaleDateString('ru-RU')}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {comment.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    )
}
