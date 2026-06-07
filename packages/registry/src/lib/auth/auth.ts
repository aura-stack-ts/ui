import { createAuth } from "@aura-stack/auth"

export const auth = createAuth({
    oauth: [],
    basePath: "/api/auth",
    baseURL: "http://localhost:3000",
})
