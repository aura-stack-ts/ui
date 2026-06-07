import { createAuth } from "@aura-stack/express"

export const auth = createAuth({
    oauth: [],
    basePath: "/api/auth",
    baseURL: "http://localhost:3000",
})

export const { toHandler, withAuth, api } = auth
