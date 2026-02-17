'use client'
import { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import RapperCard from "./RapperCard";
import { Rapper } from '@prisma/client'

interface RapperListProps {
    rappers: Rapper[]  // <- данные придут извне
}

export default function RapperList({ rappers }: RapperListProps) {
    const [searchText, setSearchText] = useState('')

    const filteredRappers = rappers.filter((rapper) => {
        return rapper.name.toLowerCase().includes(searchText.toLowerCase())
            ||
            rapper.slug.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
        <div>
            {/* Search Section */}
            <div className="mb-8">
                <label className="block text-white font-semibold mb-3 text-lg">
                    Поиск рэпера:
                </label>
                <SearchBar value={searchText} onChange={setSearchText} />
            </div>

            {/* Rappers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredRappers.map((rapper) => (
                    <Link
                        key={rapper.id}
                        href={`/rappers/${rapper.slug}`}
                        className="transform transition-all duration-300 hover:scale-105"
                    >
                        <RapperCard rapper={rapper} />
                    </Link>
                ))}
            </div>
        </div>
    )
}