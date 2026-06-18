import { News } from '@prisma/client'

export default function AdminNewsCard({ newsItem }: { newsItem: News }) {
    return (
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white"></h3>
                <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                    #4
                </span>
            </div>
            <div className="text-gray-400 mb-2 flex items-center gap-2">
                <span className="font-bold text-lg">Заголовок новости</span>
                <span className="text-gray-500">{newsItem.title}</span> 
            </div>
            <div className="text-gray-400 mb-2">
                <p className="text-gray-500 text-sm mt-1">
                    {new Date(newsItem.createdAt).toLocaleDateString('ru-RU', {
                        day: 'numeric', month: 'long', year: 'numeric'
                    })}
                </p>
            </div>
            <p className="text-gray-300 mt-4 line-clamp-3 text-sm">
                {newsItem.mainText}
            </p>
        </div>
    )
}