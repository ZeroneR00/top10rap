import Link from "next/link";
import AuthButton from "./AuthButton";
import AdminButton from "./AdminButton";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold">🎤 Топ реперов</h1>
                </Link>
                <nav className="flex gap-4">
                    <Link href="/" className="hover:text-blue-300">Главная</Link>
                    <Link href="/about" className="hover:text-blue-300">О сайте</Link>
                    <Link href="/news" className="hover:text-blue-300">Новости</Link>
                </nav>
                <AdminButton/>
                <AuthButton/>
            </div>
        </header>
    )
}