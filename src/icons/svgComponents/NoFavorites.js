import * as React from "react"

const NoFavorites = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 32 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M30.5467 4.58123L30.5468 4.58159C32.3311 8.50531 31.6279 12.9683 28.2776 17.9163L28.2768 17.9176C25.6335 21.8468 21.8326 25.775 16.2997 30.3889L16.2988 30.3896C16.2103 30.4637 16.1067 30.5 16.0048 30.5C15.9029 30.5 15.7993 30.4637 15.7107 30.3896L15.71 30.389C10.1687 25.7656 6.37596 21.8043 3.73137 17.9155C0.371523 12.9677 -0.331465 8.50508 1.45272 4.58159L1.45289 4.58123C2.69494 1.84407 6.29474 -0.417598 10.5414 0.889366C12.5717 1.51923 14.3507 2.87223 15.5827 4.73622L15.9998 5.36736L16.4169 4.73622C17.6489 2.87207 19.4282 1.519 21.4587 0.889209L21.46 0.888784C25.6934 -0.437525 29.3036 1.8419 30.5467 4.58123Z"
            fill="white"
            stroke="url(#paint0_linear_573_1806)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_573_1806"
                x1={16}
                y1={0}
                x2={16}
                y2={31}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DC6A00" />
                <stop offset={1} stopColor="#F9321F" />
            </linearGradient>
        </defs>
    </svg>
)

export default NoFavorites