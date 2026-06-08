import type { ComponentProps } from "react"

export interface AtlassianIconProps extends Omit<ComponentProps<"svg">, "width" | "height" | "color"> {
    size?: number | string
    color?: string
}

export const AtlassianIcon = ({ size = 24, color = "currentColor", className, style, ...props }: AtlassianIconProps) => {
    return (
        <svg
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
                fill={color}
                d="M7.892 11.255c-.322-.322-.773-.322-.966.097L2.06 21.114c-.193.354.097.87.548.87h6.797a.62.62 0 0 0 .548-.323c1.45-3.06.548-7.668-2.062-10.406zM11.5 2.331c-4.704 7.539-.323 13.563 2.545 19.33a.62.62 0 0 0 .548.322h6.797a.602.602 0 0 0 .548-.87s-9.116-18.33-9.342-18.781c-.29-.42-.838-.42-1.095 0z"
            />
        </svg>
    )
}

AtlassianIcon.displayName = "AtlassianIcon"

export default AtlassianIcon
