import { prisma } from "@/app/lib/prisma"
import Link from 'next/link'
import RapperList from "../components/RapperList";


export default async function Rapper({ searchParams }: { searchParams: Promise<{ tag?: string }> })  {
    const params = await searchParams
    const selectedTag = params.tag

    const rappers = await prisma.rapper.findMany({
        where: selectedTag 
            ? { tags: { some: { name: selectedTag } } }
            : {},
        include: { tags: true }
    })

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black p-4 md:p-8">
            <div className="max-w-6xl mx-auto">

                <div className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Топ 10 Рэперов
                    </h1>
                    <p className="text-gray-300 text-lg mb-6">
                        Найдите своего любимого исполнителя
                    </p>
                </div>

                <RapperList rappers={rappers} />

                {/* Back Button */}
                <div className="flex justify-center mt-8">
                    <Link
                        className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                        href='/'
                    >
                        На главную
                    </Link>
                </div>
            </div>
        </main>
    )
}
