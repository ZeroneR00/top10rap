import { Tag } from '@prisma/client'


interface TagsProps {
    tags?: Tag[]
}

export default function Tags({ tags }: TagsProps) {
    return (
        <div className="flex gap-3 mb-6">

            { tags && tags.map((tag) => {
                return <span key={tag.id} className="px-3 py-1 bg-gray-800 rounded-full">{tag.name}</span>
            })}
        </div>
    )
}