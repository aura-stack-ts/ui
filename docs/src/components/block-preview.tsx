"use client"

import { MemoryRouter } from "react-router"
import { registry } from "@/registry/index"
import { AuthProvider, createAuthClient } from "@aura-stack/react"
import { BlockPreviewClient } from "@/components/block-preview-client"
import { useEffect } from "react"

interface BlockPreviewProps {
    name: string
    description?: string
    installCommand?: string
    lang?: string
}

const baseURL =
    process.env.PUBLIC_NEXT_BASE_URL ?? (process.env.NEXT_URL && `https://${process.env.NEXT_URL}`) ?? "http://localhost:3000"

const authClient = createAuthClient({
    baseURL,
    basePath: "/api/auth",
})

export function BlockPreview({ name, description, installCommand, lang = "tsx" }: BlockPreviewProps) {
    const entry = registry[name]

    if (!entry) {
        throw new Error(`BlockPreview: no block named "${name}" in the registry.`)
    }
    const Component = entry

    useEffect(() => {
        const originalFetch = window.fetch

        window.fetch = async (input, init) => {
            const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url

            if (url.includes("/api/auth/")) {
                return new Response(JSON.stringify({ message: "Blocked by preview" }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                })
            }
            return originalFetch(input, init)
        }

        return () => {
            window.fetch = originalFetch
        }
    }, [])

    return (
        <BlockPreviewClient
            name={name}
            description={description}
            installCommand={installCommand ?? `npx shadcn add ${name}`}
            code={`import { source } from "@aura-ui/registry"`}
            lang={lang}
        >
            <AuthProvider client={authClient}>
                <MemoryRouter>
                    <Component />
                </MemoryRouter>
            </AuthProvider>
        </BlockPreviewClient>
    )
}
