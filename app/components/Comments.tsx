'use client';

import { authClient } from "../lib/auth-client"
import { useState } from "react";
import { addComment } from "../actions/comments";

interface CommentsProps {
    newsId: string;
}

export default function Comments({ newsId }: CommentsProps) {
    const [comment, setComment] = useState('');
    const {
        data: session,
        isPending,
        error
    } = authClient.useSession()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment('')
        await addComment(newsId, comment);

    }
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            setComment('')
            await addComment(newsId, comment);
        }
    }

    return (
        <>{session ? (
            <form onSubmit={handleSubmit}>
                <textarea
                    onKeyDown={handleKeyDown}
                    placeholder="Комментарий"
                    value={comment}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit"
                    className="text-white mt-3 p-3 bg-purple-600 rounded-lg hover:bg-purple-700">
                    Отправить
                </button>
            </form>)
            :
            (<>Пожалуйста, авторизуйтесь для добавления комментария</>)}</>


    )
}