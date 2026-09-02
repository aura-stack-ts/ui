import { createAuthClient } from "@aura-stack/next/pages/client"

export const authClient = createAuthClient({
    basePath: "/api/auth",
    baseURL: "http://localhost:3000",
})
