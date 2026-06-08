export const DiscordIcon = ({
    size = 24,
    color = "#000000",
    strokeWidth = 2,
    background = "transparent",
    opacity = 1,
    rotation = 0,
    shadow = 0,
    flipHorizontal = false,
    flipVertical = false,
    padding = 0,
}) => {
    const transforms = []
    if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`)
    if (flipHorizontal) transforms.push("scaleX(-1)")
    if (flipVertical) transforms.push("scaleY(-1)")

    const SVG_SIZE = 14
    const viewBoxSize = SVG_SIZE + padding * 2
    const viewBoxOffset = -padding
    const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                opacity,
                transform: transforms.join(" ") || undefined,
                filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
                backgroundColor: background !== "transparent" ? background : undefined,
            }}
        >
            <g fill="none">
                <path
                    fill="#d7e0ff"
                    d="M.858 9.864c0-2.401.858-5.574 1.716-6.86c0 0 .857-.43 4.288-.43s4.288.43 4.288.43c.858 1.286 1.716 4.459 1.716 6.86c-.286.43-1.287 1.373-3.002 1.716L8.355 9.694a6.6 6.6 0 0 1-2.986 0L3.86 11.58c-1.715-.343-2.716-1.287-3.002-1.716"
                />
                <path
                    stroke="#4147d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M.858 9.864c0-2.401.858-5.574 1.716-6.86c0 0 .857-.43 4.288-.43s4.288.43 4.288.43c.858 1.286 1.716 4.459 1.716 6.86c-.286.43-1.287 1.373-3.002 1.716L8.355 9.694a6.6 6.6 0 0 1-2.986 0L3.86 11.58c-1.715-.343-2.716-1.287-3.002-1.716"
                />
                <path
                    stroke="#4147d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.86 9.007c.261.261.81.523 1.509.687a6.6 6.6 0 0 0 2.986 0c.699-.164 1.247-.426 1.509-.687"
                />
                <path stroke="#4147d5" d="M4.112 6.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m4.5 0a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0" />
            </g>
        </svg>
    )
}

export default DiscordIcon
