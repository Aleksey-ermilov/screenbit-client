import * as React from "react"

const ProductActiveSvg = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M24.375 1.875H7.5A1.875 1.875 0 0 0 5.625 3.75V7.5H3.75v1.875h1.875v4.688H3.75v1.874h1.875v4.688H3.75V22.5h1.875v3.75A1.875 1.875 0 0 0 7.5 28.125h16.875a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875Zm0 24.375H7.5V22.5h1.875v-1.875H7.5v-4.688h1.875v-1.874H7.5V9.375h1.875V7.5H7.5V3.75h16.875v22.5Z"
            fill="url(#a)"
        />
        <path
            d="M13.125 7.5h7.5v1.875h-7.5V7.5Zm0 6.563h7.5v1.874h-7.5v-1.874Zm0 6.562h7.5V22.5h-7.5v-1.875Z"
            fill="url(#b)"
        />
        <defs>
            <linearGradient
                id="a"
                x1={15}
                y1={1.875}
                x2={15}
                y2={28.125}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DC6A00" />
                <stop offset={1} stopColor="#F9321F" />
            </linearGradient>
            <linearGradient
                id="b"
                x1={16.875}
                y1={7.5}
                x2={16.875}
                y2={22.5}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DC6A00" />
                <stop offset={1} stopColor="#F9321F" />
            </linearGradient>
        </defs>
    </svg>
)

export default ProductActiveSvg