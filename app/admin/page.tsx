export default function AdminPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-10 border-b border-gray-800 pb-6">
                    <h1 className="text-4xl font-black">Админ панель</h1>
                    <p className="text-gray-500 mt-1">Управление новостями</p>
                </div>

                {/* Кнопка создать */}
                <div className="mb-8">
                    <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold">
                        + Добавить новость
                    </button>
                </div>

                {/* Список новостей */}
                <div className="flex flex-col gap-4">

                    {/* Одна новость — потом будет map */}
                    <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-5">
                        <div>
                            <h3 className="font-bold text-lg">Заголовок новости</h3>
                            <p className="text-gray-500 text-sm mt-1">14 марта 2026</p>
                        </div>
                        <div className="flex gap-3">
                            <button type="button" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm">
                                Редактировать
                            </button>
                            <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 text-sm">
                                Удалить
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
