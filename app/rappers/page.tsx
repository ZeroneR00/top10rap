'use client'

import { useState } from "react";
import RapperCard from ".././components/RapperCard";
import { rappers } from ".././data/rappers";
import Link from 'next/link'
import SearchBar from ".././components/SearchBar";


export default function Rapper() {
    const [searchText, setSearchText] = useState('')

    const filteredRappers = rappers.filter((rapper) => {
        return rapper.name.toLowerCase().includes(searchText.toLowerCase())
          ||
          rapper.slug.toLowerCase().includes(searchText.toLowerCase())
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
