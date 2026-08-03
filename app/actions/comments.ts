'use server'

import { headers } from "next/headers"
import { auth } from "../lib/auth"
import { prisma } from "../lib/prisma"
import { revalidatePath } from "next/cache"


export async function addComment(newsId: string, text: string) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        throw new Error('Не авторизован')
    }

    const trimmedText = text.trim()
    if (!trimmedText) {
        throw new Error('Комментарий не может быть пустым')
    }

    await prisma.comment.create({
        data: {
            comment: trimmedText,
            authorId: session.user.id,
            newsId: newsId
        }
    })

    revalidatePath(`/news/${newsId}`)
}