import { createAuth } from "@aura-stack/react-router"

export const auth = createAuth({
    oauth: [],
    basePath: "/api/auth",
    baseURL: "http://localhost:5173",
})

export const { api, handlers } = auth
