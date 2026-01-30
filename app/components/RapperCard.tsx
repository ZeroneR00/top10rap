import { Rapper } from '../types'

export default function RapperCard({ rapper }: { rapper: Rapper }) {
    console.log(rapper)
    return (
        <div className="p-4 m-3 border border-zinc-500 rounded-md">
            <p>Name: {rapper.name}</p>
            <p>Slug: {rapper.slug}</p>
            <p>Real Name: {rapper.realName}</p>
            <p>Image: {rapper.image}</p>
            <p>Rank: {rapper.rank}</p>
            <p>Bio: {rapper.bio}</p>
        </div>
    )
}