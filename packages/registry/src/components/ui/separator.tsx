"use client"

import { cn } from "@/lib/utils"
import { Separator as SeparatorPrimitive } from "radix-ui"
import type { ComponentProps } from "react"

export const Separator = ({
    className,
    orientation = "horizontal",
    decorative = true,
    ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) => {
    return (
        <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
                className
            )}
            {...props}
        />
    )
}
