'use server' 

import { headers } from "next/headers";
import { revalidatePath } from "next/cache"
import { auth, requireAdmin } from "../lib/auth";

export async function adminUnBanAction(userID: string) {
    await requireAdmin()

    await auth.api.unbanUser({
        body: {
            userId: userID, // required
        },
        headers: await headers(),
    });
    revalidatePath(`/admin/user`)
}