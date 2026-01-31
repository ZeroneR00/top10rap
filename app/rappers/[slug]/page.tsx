import { notFound } from 'next/navigation'
import Link from 'next/link'

import { rappers } from '@/app/data/rappers'
import Tags from '@/app/components/Tags'


export default async function RapperPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const rapper = rappers.find(r => r.slug === slug)

    if (!rapper) {
        notFound()
    }
    return (

        <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full border border-gray-800">

                {/* Верхний градиентный блок */}
                <div className="relative h-48 bg-gradient-to-r from-purple-900 via-gray-900 to-black">

                    <div className="absolute bottom-4 left-6">
                        <div className="mb-8 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                Топ 10 Рэперов
                            </h1>
                            <p className="text-gray-300 text-lg mb-6">
                                Найдите своего любимого исполнителя
                            </p>
                        </div>
                        <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                            Ранг: {rapper.id}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row p-6 md:p-8">

                    {/* Левая часть - фото */}
                    <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                        <div className="relative -mt-20 mb-6">
                            <div className="w-40 h-40 rounded-xl overflow-hidden border-4 border-gray-800 shadow-xl">
                                <img
                                    src="/rapper.jpg"
                                    alt="Рэпер"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Статистика */}
                        <div className="space-y-4">
                            <div className="p-3 bg-gray-800 rounded-lg">
                                <p className="text-sm text-gray-400">Альбомы</p>
                                <p className="text-xl font-bold">5</p>
                            </div>
                            <div className="p-3 bg-gray-800 rounded-lg">
                                <p className="text-sm text-gray-400">Награды</p>
                                <p className="text-xl font-bold">12</p>
                            </div>
                        </div>
                    </div>

                    {/* Правая часть - информация */}
                    <div className="md:w-2/3">

                        {/* Имена */}
                        <div className="mb-4">
                            <h2 className="text-4xl font-bold">СЦЕНИЧЕСКОЕ ИМЯ : {rapper.slug}</h2>
                            <p className="text-gray-400 text-xl">Имя Фамилия: {rapper.realName}</p>
                        </div>

                        {/* Биография */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-3">Биография</h3>
                            <p className="text-gray-300">
                                {rapper.bio}
                            </p>
                        </div>

                        {/* Доп информация */}
                        <Tags tags={rapper.tags} />
                        {/* <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-gray-800 rounded-full">Хип-хоп</span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full">Трэп</span>
                            <span className="px-3 py-1 bg-red-600 rounded-full font-bold">Легенда</span>
                        </div> */}

                        {/* Кнопка */}
                        {/* <button className="w-full md:w-auto px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition">
                            Слушать треки
                        </button> */}
                        <Link
                            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                            href="/rappers"
                        >
                            Назад
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
