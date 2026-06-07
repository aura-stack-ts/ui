import { createAuthClient } from "@aura-stack/react-router/client"

export const authClient = createAuthClient({
    basePath: "/api/auth",
    baseURL: "http://localhost:5173",
})
