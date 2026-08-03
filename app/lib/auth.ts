import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { prisma } from "./prisma"
import { admin } from "better-auth/plugins"
import { headers } from "next/headers"


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        admin({
            adminRoles: ["admin"],
            defaultRole: "user"
        }),
    ]

})

// Server Actions доступны как публичные HTTP-эндпоинты (по ID, а не по URL страницы),
// поэтому proxy.ts их не защищает — каждый admin-action обязан проверить роль сам.
export async function requireAdmin() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session || session.user.role !== "admin") {
        throw new Error("Доступ запрещён")
    }

    return session
}