import { cn } from "@/lib/cn"
import type { HTMLAttributes, PropsWithChildren } from "react"

interface ComponentPreviewContainerProps extends HTMLAttributes<HTMLDivElement> {
    align?: "center" | "start" | "end"
    minHeight?: string
    isBgSolid?: boolean
    description?: string
    name: string
}

export const ComponentPreviewContainer = ({
    align = "center",
    children,
    className,
    description,
    isBgSolid = false,
    minHeight,
    name,
    style,
    ...props
}: PropsWithChildren<ComponentPreviewContainerProps>) => {
    const alignmentClasses = {
        center: "items-center justify-center",
        end: "items-end justify-end",
        start: "items-start justify-start",
    }

    return (
        <div
            className={cn("component-preview-container group w-full my-4 relative ", className)}
            data-name={name}
            style={{ ...style, contain: style?.contain ?? "content" }}
            {...props}
        >
            {!!description && <p className="mb-2 text-muted-foreground text-sm">{description}</p>}
            <div
                data-name={name}
                className={cn(
                    "preview w-full min-h-87.5 p-4 not-prose relative overflow-hidden rounded-xl border border-separator sm:p-10",
                    isBgSolid && "bg-background",
                    alignmentClasses[align],
                    "flex"
                )}
            >
                <div className="flex w-full items-center justify-center" style={{ minHeight }}>
                    {children}
                </div>
            </div>
        </div>
    )
}
