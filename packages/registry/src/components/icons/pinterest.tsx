import { forwardRef, type ComponentProps } from "react"

export interface PinterestIconProps extends Omit<ComponentProps<"svg">, "width" | "height"> {
    size?: number | string
}

export const PinterestIcon = forwardRef<SVGSVGElement, PinterestIconProps>(({ size = 24, className, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M8 14.5c-3-4.5 1.462-8 4.5-8S18 8.154 18 12c0 3.038-2 5-4 5s-3-2-2.5-5m.5-2L9 21.5" />
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
        </svg>
    )
})

PinterestIcon.displayName = "PinterestIcon"

export default PinterestIcon
