"use client"

import { BlockPreviewClient } from "./block-preview-client"
import { registry } from "@/registry/index"
import { AuthProvider, createAuthClient } from "@aura-stack/react"

interface BlockPreviewProps {
    name: string
    description?: string
    installCommand?: string
    lang?: string
}

const authClient = createAuthClient({})

export function BlockPreview({ name, description, installCommand, lang = "tsx" }: BlockPreviewProps) {
    const entry = registry[name]

    if (!entry) {
        throw new Error(`BlockPreview: no block named "${name}" in the registry.`)
    }

    const Component = entry

    return (
        <BlockPreviewClient
            name={name}
            description={description}
            installCommand={installCommand ?? `npx shadcn add ${name}`}
            code={`import { source } from "@aura-ui/registry"`}
            lang={lang}
        >
            <AuthProvider client={authClient}>
                <Component />
            </AuthProvider>
        </BlockPreviewClient>
    )
}
