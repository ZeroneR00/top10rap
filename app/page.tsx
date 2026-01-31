'use client'

import Link from "next/link";


export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black font-sans">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Top 10 Rap
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Открой для себя лучших рэперов
        </p>
        <Link 
          href='/rappers'
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
        >
          Перейти к рэперам
        </Link>
      </div>
    </div >
  );
}
