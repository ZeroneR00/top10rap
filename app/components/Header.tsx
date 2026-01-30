import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">🎤 Топ реперов</h1>
                <nav className="flex gap-4">
                    <Link href="/" className="hover:text-blue-300">Главная</Link>
                    <Link href="/about" className="hover:text-blue-300">О сайте</Link>
                </nav>
            </div>
        </header>
    )
}