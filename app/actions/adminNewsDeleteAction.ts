'use server'

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache"




export async function adminNewsDelete(newsId: string) { 
    await prisma.news.delete({
        where: {
            id: newsId
        }
    })

    revalidatePath('/admin')
}