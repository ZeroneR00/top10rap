import { Tag } from '@prisma/client'
import Link from 'next/link'


interface TagsProps {
    tags?: Tag[]
}

export default function Tags({ tags }: TagsProps) {

    return (
        <div className="flex gap-3 mb-6">
            {tags && tags.map((tag) => {
                return (
                    <Link href={`/rappers?tag=${tag.name}`} key={tag.id} >
                        <span className={`px-3 py-1 ${tag.name === 'Легенда' ? "bg-red-600 rounded-full font-bold" : "bg-gray-800 rounded-full"}`}>{tag.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}