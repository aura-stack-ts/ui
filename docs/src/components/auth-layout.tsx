"use client"

import { createAuthClient, AuthProvider } from "@aura-stack/next/client"
import { AuthPreviewInterceptor } from "@/components/preview-interceptor"
import type { PropsWithChildren } from "react"

const baseURL =
    process.env.PUBLIC_NEXT_BASE_URL ?? (process.env.NEXT_URL && `https://${process.env.NEXT_URL}`) ?? "http://localhost:3000"

const authClient = createAuthClient({
    baseURL,
    basePath: "/api/auth",
})

export const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <AuthPreviewInterceptor>
            <AuthProvider client={authClient}>{children}</AuthProvider>
        </AuthPreviewInterceptor>
    )
}
