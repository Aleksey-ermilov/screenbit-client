import * as React from "react"

const MessagesSvg = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <rect width={30} height={30} fill="url(#patternMessagesSvg)" />
        <defs>
            <pattern
                id="patternMessagesSvg"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#image0_701_4" transform="scale(0.00195312)" />
            </pattern>
            <image
                id="image0_701_4"
                width={512}
                height={512}
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
)

export default MessagesSvg