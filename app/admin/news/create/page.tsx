import { adminСreateNews } from "@/app/actions/adminСreateNewsAction"
import Link from "next/link"

export default function AdminCreateNewsPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-2xl mx-auto">

                <div className="mb-8 border-b border-gray-800 pb-6">
                    <Link href="/admin" className="text-gray-500 hover:text-white text-sm mb-4 inline-block">
                        ← Назад в админку
                    </Link>
                    <h1 className="text-4xl font-black">Создать новость</h1>
                </div>

                <form action={adminСreateNews} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-400 uppercase tracking-widest">Заголовок</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Введите заголовок..."
                            className="px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-400 uppercase tracking-widest">Текст</label>
                        <textarea
                            name="mainText"
                            placeholder="Введите текст новости..."
                            rows={6}
                            className="px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 font-semibold transition"
                    >
                        Опубликовать
                    </button>
                </form>
            </div>
        </main>
    )
}