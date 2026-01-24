import RapperCard from "./components/RapperCard";
import { rappers } from "./data/rappers";
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🎤 Топ реперов</h1>
          <nav className="flex gap-4">
            <a href="/" className="hover:text-blue-300">Главная</a>
            <a href="/about" className="hover:text-blue-300">О сайте</a>
          </nav>
        </div>
      </header>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="p-4">

          {rappers.map((rapper) => (
            <Link key={rapper.id} href={`/rappers/${rapper.slug}`}>
              <ul className="p-4 m-3 border border-zinc-500 rounded-md">
                <li>Name: {rapper.name}</li>
                <li>Slug: {rapper.slug}</li>
                <li>Real Name: {rapper.realName}</li>
                <li>Image: {rapper.image}</li>
                <li>Rank: {rapper.rank}</li>
                <li>Bio: {rapper.bio}</li>
              </ul>
            </Link>

          ))}


          {/* <RapperCard /> */}

        </main>
      </div >
    </>
  );
}
