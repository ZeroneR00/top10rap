'use client'

import { useState } from "react"
import { authClient } from "@/app/lib/auth-client"

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const name = formData.get('name') as string;

        try {
            if (isLogin) {
                // Логин
                await authClient.signIn.email({
                    email,
                    password,
                })
            } else {
                // Регистрация
                await authClient.signUp.email({
                    email,
                    password,
                    name,
                })
            }

            onClose() // Закрываем модалку после успеха
        } catch (error) {
            console.error('Ошибка авторизации:', error)
            alert('Ошибка! Проверь данные')
        }
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-900 p-8 rounded-xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-white mb-6">
                    {isLogin ? 'Вход' : 'Регистрация'}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            name="name"
                            type="text"
                            placeholder="Имя"
                            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
                        />
                    )}
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
                    />
                    {!isLogin && (
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Повторите пароль"
                            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
                        />
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
                    >
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>

                <p className="text-gray-400 text-center mt-4">
                    {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-purple-500 hover:text-purple-400"
                    >
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </button>
                </p>
            </div>
        </div>
    )
}