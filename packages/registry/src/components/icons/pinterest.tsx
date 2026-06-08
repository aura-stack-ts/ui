export const PinterestIcon = ({
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

    const SVG_SIZE = 24
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
            <path
                fill="#ff808c"
                stroke="#191919"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.513 1C6.511 1 3.49 5.303 3.49 8.89c0 2.174.824 4.113 2.587 4.827a.435.435 0 0 0 .632-.316c.06-.22.198-.78.26-1.014a.61.61 0 0 0-.183-.704a3.63 3.63 0 0 1-.833-2.477a5.983 5.983 0 0 1 6.215-6.05c3.393 0 5.26 2.072 5.26 4.84c0 3.642-1.614 6.717-4.007 6.717a1.955 1.955 0 0 1-1.994-2.43c.383-1.601 1.116-3.326 1.116-4.481a1.692 1.692 0 0 0-1.704-1.897c-1.351 0-2.436 1.397-2.436 3.27a4.85 4.85 0 0 0 .403 1.998L7.18 18.058a14.2 14.2 0 0 0-.038 4.8a.168.168 0 0 0 .3.075a13.5 13.5 0 0 0 2.281-4.136a394 394 0 0 0 .888-3.473a3.62 3.62 0 0 0 3.086 1.574c4.06-.004 6.814-3.706 6.814-8.66C20.51 4.49 17.337 1 12.513 1"
            />
        </svg>
    )
}

export default PinterestIcon
