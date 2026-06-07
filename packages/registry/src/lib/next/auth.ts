import { createAuth } from "@aura-stack/react/server"

export const auth = createAuth({
    oauth: [],
    baseURL: "http://localhost:3000",
    basePath: "/api/auth",
})

export const { api, handlers } = auth
