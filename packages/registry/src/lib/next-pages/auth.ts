import { createAuth } from "@aura-stack/next/pages"

export const auth = createAuth({
    oauth: [],
    baseURL: "http://localhost:3000",
    basePath: "/api/auth",
})

export const { api, handlers } = auth
