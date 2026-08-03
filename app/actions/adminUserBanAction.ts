'use server' 

import { headers } from "next/headers";
import { auth, requireAdmin } from "../lib/auth";
import { revalidatePath } from "next/cache"

export async function adminUserBanAction(userID: string) {
    await requireAdmin()

    await auth.api.banUser({
        body: {
            userId: userID,
            banReason: "Spamming",
            banExpiresIn: 60 * 60 * 24 * 7,
        },
        headers: await headers(),
    });

    revalidatePath(`/admin/user`)
}