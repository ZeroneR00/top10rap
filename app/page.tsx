'use client'

import { useState } from "react";
import RapperCard from "./components/RapperCard";
import { rappers } from "./data/rappers";
import Link from 'next/link'
import SearchBar from "./components/SearchBar";



export default function Home() {

  const [searchText, setSearchText] = useState('')

  const filteredRappers = rappers.filter((rapper) => {
    return rapper.name.toLowerCase().includes(searchText.toLowerCase())
      ||
      rapper.slug.toLowerCase().includes(searchText.toLowerCase())
  })

  console.log('searchText:', searchText)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="p-4">
        <label>
          Поиск рэпера:
          <SearchBar value={searchText} onChange={setSearchText} />
        </label>
        {filteredRappers.map((rapper) => (
          <Link key={rapper.id} href={`/rappers/${rapper.slug}`}>
            <RapperCard rapper={rapper} />
          </Link>
        ))}
      </main>
    </div >
  );
}
