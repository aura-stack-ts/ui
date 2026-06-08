import { forwardRef, type ComponentProps } from "react"

export interface SpotifyIconProps extends ComponentProps<"svg"> {
    size?: number | string
}

export const SpotifyIcon = forwardRef<SVGSVGElement, SpotifyIconProps>(({ size = 24, className, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width={size}
            height={size}
            className={className}
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m3.7 11.5c-.1.2-.5.3-.7.2c-2.1-1.2-4.7-1.5-7-.8c-.3 0-.5-.1-.6-.4c0-.2.1-.5.4-.6c2.6-.8 5.4-.4 7.8.9c.1.2.2.5.1.7m1-2.1q-.15 0 0 0c-.2.3-.6.4-.9.2c-2.4-1.4-5.3-1.7-8-.9c-.3.1-.7-.1-.8-.4c-.1-.4.1-.7.4-.9c3-.9 6.3-.5 9 1.1c.3.2.4.6.3.9m0-2.3c-2.6-1.5-6.8-1.7-9.3-.9c-.4.1-.8-.1-.9-.5s.1-.8.5-1c2.8-.8 7.5-.7 10.5 1.1c.4.2.5.7.3 1c-.3.4-.7.5-1.1.3"
            />
        </svg>
    )
})

SpotifyIcon.displayName = "SpotifyIcon"

export default SpotifyIcon
