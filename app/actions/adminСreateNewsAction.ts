'use server'

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function adminСreateNews(formData: FormData) { 

    const title = formData.get('title') as string
    const mainText = formData.get('mainText') as string

   await prisma.news.create({
    data: {
        title: title,
        mainText: mainText
    }
   })
   revalidatePath('/admin')
   redirect('/admin')
}