import { cn } from "@/lib/cn"
import { ComponentPreviewContainer } from "./preview-container"
import { registry } from "@/registry"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    align?: "center" | "start" | "end"
    isBgSolid?: boolean
    description?: string
    hideCode?: boolean
    minHeight?: string
}

export const ComponentPreview = ({
    align = "center",
    className,
    description,
    hideCode = false,
    isBgSolid = false,
    minHeight,
    name,
    ...props
}: ComponentPreviewProps) => {
    const Component = registry[name]

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
            hideCode={hideCode}
            isBgSolid={isBgSolid}
            minHeight={minHeight}
            name={name}
            {...props}
        >
            <Component />
        </ComponentPreviewContainer>
    )
}
