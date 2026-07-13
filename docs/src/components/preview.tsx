import { cn } from "@/lib/cn"
import { ComponentPreviewContainer } from "./preview-container"
import { registry as defaultRegistry } from "@/registry"
import type { HTMLAttributes, ComponentType } from "react"

interface ComponentPreviewProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    align?: "center" | "start" | "end"
    isBgSolid?: boolean
    description?: string
    hideCode?: boolean
    minHeight?: string
    registry?: Record<string, ComponentType>
}

export const ComponentPreview = ({
    align = "center",
    className,
    description,
    isBgSolid = false,
    minHeight,
    name,
    registry,
    ...props
}: ComponentPreviewProps) => {
    const Component = registry?.[name] || defaultRegistry[name]

    if (!Component) {
        return (
            <div className={cn("my-4 p-4 rounded-md border border-red-200 bg-red-50", className)}>
                <p className="text-sm text-red-600">
                    Component demo &quot;{name}&quot; not found. Make sure the demo is registered in the demos index.
                </p>
            </div>
        )
    }

    return (
        <ComponentPreviewContainer
            align={align}
            className={className}
            description={description}
            isBgSolid={isBgSolid}
            minHeight={minHeight}
            name={name}
            {...props}
        >
            <Component />
        </ComponentPreviewContainer>
    )
}
