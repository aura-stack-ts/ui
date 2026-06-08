import { forwardRef, type ComponentProps } from "react"

export interface StravaIconProps extends ComponentProps<"svg"> {
    size?: number | string
}

export const StravaIcon = forwardRef<SVGSVGElement, StravaIconProps>(({ size = 24, className, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className={className}
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M6.731 0L2 9.125h2.788L6.73 5.497l1.93 3.628h2.766zm4.694 9.125l-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875z"
            />
        </svg>
    )
})

StravaIcon.displayName = "StravaIcon"

export default StravaIcon
