import * as React from "react"

export const FavoritesActiveSvg = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 2.464c8.32-8.554 29.126 6.414 0 25.661C-14.127 8.88 6.678-6.09 15 2.464Z"
            fill="url(#a)"
        />
        <defs>
            <linearGradient
                id="a"
                x1={15}
                y1={0}
                x2={15}
                y2={28.125}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DC6A00" />
                <stop offset={1} stopColor="#F9321F" />
            </linearGradient>
        </defs>
    </svg>
)
