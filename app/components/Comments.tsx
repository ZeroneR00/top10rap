'use client';

import { useState } from "react";
import { addComment } from "../actions/comments";

interface CommentsProps {
    newsId: string;
}

export default function Comments({ newsId }: CommentsProps) {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addComment(newsId, comment);
    }

    const [comment, setComment] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Отправить</button>
        </form>
    )
}