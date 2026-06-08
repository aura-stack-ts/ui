export const FigmaIcon = ({
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
    const viewBoxSize = 24 + padding * 2
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
            <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="#a6da95" d="M7.5 11.5h-2a2 2 0 1 0 2 2z" />
                <path stroke="#c6a0f6" d="M7.5 10.5v-4h-2a2 2 0 1 0 0 4z" />
                <path stroke="#ed8796" d="M7.5 5.5v-4h-2a2 2 0 1 0 0 4z" />
                <path stroke="#f5a97f" d="M10.5 5.5a2 2 0 1 0 0-4h-2v4z" />
                <path stroke="#91d7e3" d="M12.5 8.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2" />
            </g>
        </svg>
    )
}

export default FigmaIcon
