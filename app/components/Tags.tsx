interface Tags {
    tags?: string[]
}

export default function Tags({ tags }: Tags) {
    return (
        <div className="flex gap-3 mb-6">

            { tags && tags.map((tag) => {
                return <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full">{tag}</span>
            })}
        </div>
    )
}