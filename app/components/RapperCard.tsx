import { Rapper } from '../types'

export default function RapperCard({ rapper }: { rapper: Rapper }) {
    console.log(rapper)
    return (
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{rapper.name}</h3>
                <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                    #{rapper.rank}
                </span>
            </div>
            <p className="text-gray-400 mb-2">
                <span className="text-gray-500">Сценическое имя:</span> {rapper.slug}
            </p>
            <p className="text-gray-400 mb-2">
                <span className="text-gray-500">Настоящее имя:</span> {rapper.realName}
            </p>
            <p className="text-gray-300 mt-4 line-clamp-3 text-sm">
                {rapper.bio}
            </p>
        </div>
    )
}