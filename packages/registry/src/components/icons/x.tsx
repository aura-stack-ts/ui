import { forwardRef, type ComponentProps } from "react"

export interface XIconProps extends Omit<ComponentProps<"svg">, "width" | "height"> {
    size?: number | string
}

export const XIcon = forwardRef<SVGSVGElement, XIconProps>(({ size = 24, className, style, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            aria-hidden="true"
            focusable="false"
            className={className}
            style={{
                display: "inline-block",
                verticalAlign: "middle",
                flexShrink: 0,
                ...style,
            }}
            {...props}
        >
            <path
                fill="currentColor"
                d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
            />
        </svg>
    )
})

XIcon.displayName = "XIcon"

export default XIcon
