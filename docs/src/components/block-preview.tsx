"use client"

import { useState } from "react"
import { MemoryRouter } from "react-router"
import { registry } from "@/registry/index"
import { BlockPreviewClient } from "@/components/block-preview-client"

interface BlockPreviewProps {
    name: string
    description?: string
    installCommand?: string
    lang?: string
}

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
            <MemoryRouter>
                <Component />
            </MemoryRouter>
        </BlockPreviewClient>
    )
}
