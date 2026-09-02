"use client"

import { MemoryRouter } from "react-router"
import { registry } from "@/registry/index"
import { AuthProvider, createAuthClient } from "@aura-stack/react"
import { BlockPreviewClient } from "@/components/block-preview-client"
import { AuthPreviewInterceptor } from "@/components/preview-interceptor"
import { useState } from "react"

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

export const BlockPreview = ({ name, description, installCommand, lang = "tsx" }: BlockPreviewProps) => {
    const [framework, setFramework] = useState("react")
    const registryKey = `${name}-${framework}`
    const Component = registry[registryKey] ?? registry[name]

    if (!Component) {
        throw new Error(`BlockPreview: Component for "${registryKey}" or "${name}" not found in registry.`)
    }
    return (
        <BlockPreviewClient
            name={name}
            description={description}
            installCommand={installCommand ?? `npx shadcn add ${name}`}
            code={`import { source } from "@aura-ui/registry"`}
            selectedFramework={framework}
            onFrameworkChange={setFramework}
            lang={lang}
        >
            <AuthPreviewInterceptor>
                <AuthProvider client={authClient}>
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                </AuthProvider>
            </AuthPreviewInterceptor>
        </BlockPreviewClient>
    )
}
