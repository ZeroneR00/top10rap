'use server'

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache"
import { requireAdmin } from "../lib/auth"


export async function adminNewsDelete(newsId: string) {
    await requireAdmin()

    await prisma.news.delete({
        where: {
            id: newsId
        }
    })

    revalidatePath('/admin')
}