import { News } from '@prisma/client'

export default function NewsCard({ newsItem }: { newsItem: News }) {
    return (
        <div className="relative p-6 pr-15 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500 cursor-pointer">
            <span className="absolute top-5 right-3.5 px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                ^_^
            </span>
            <p className="mb-2">
                <span className="text-gray-500">Имя новости:</span> <span className="text-2xl">{newsItem.title}</span>
            </p>
            <div className="w-25 h-0.5 bg-purple-500 mb-6" />
            {/* <p className="text-gray-400 mb-2">
                <span className="text-gray-500">Айди новости:</span> {newsItem.id}
            </p> */}
            <p className="text-gray-300 mt-4 line-clamp-3 text-sm">
                {newsItem.mainText}
            </p>
        </div>
    )
}