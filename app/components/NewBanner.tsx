import { News } from '@prisma/client'

export default function RapperCard({ neww }: { neww: News }) {
    return (
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white"></h3>
                <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                    #4
                </span>
            </div>
            <p className="text-gray-400 mb-2">
                <span className="text-gray-500">Название новости:</span> {neww.title}
            </p>
            <p className="text-gray-400 mb-2">
                <span className="text-gray-500">Айди новости:</span> {neww.id}
            </p>
            <p className="text-gray-300 mt-4 line-clamp-3 text-sm">
                {neww.mainText}
            </p>
        </div>
    )
}