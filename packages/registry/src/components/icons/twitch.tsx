export const TwitchIcon = ({
    size = undefined,
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

    const SVG_SIZE = 20
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
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth={strokeWidth}
                d="M16 7v4m-4-4v4m4-8H8c-1.886 0-2.828 0-3.414.584C4 4.167 4 5.106 4 6.984v6.576c0 .37 0 .555.025.71a2 2 0 0 0 1.662 1.657c.156.024.341.024.713.024c.093 0 .14 0 .178.006a.5.5 0 0 1 .416.414c.006.039.006.085.006.178v1.543c0 1.182 0 1.773.335 1.89c.334.117.705-.344 1.446-1.268l1.919-2.39c.147-.183.221-.275.324-.324c.102-.049.22-.049.457-.049h3.862c.818 0 1.226 0 1.594-.152c.367-.151.656-.44 1.235-1.015l.656-.655c.579-.575.867-.863 1.02-1.23c.152-.366.152-.773.152-1.587V6.985c0-1.879 0-2.818-.586-3.401C18.828 3 17.886 3 16 3"
            />
        </svg>
    )
}

export default TwitchIcon
