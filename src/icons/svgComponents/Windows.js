import * as React from "react"

const Windows = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 9.61975L27.7897 5.85012L27.8016 32.5511L0.0252344 32.7085L0 9.62002V9.61975ZM27.7764 35.6272L27.7977 62.3515L0.0215156 58.5475L0.0199219 35.4481L27.7761 35.6272H27.7764ZM31.1451 5.35665L67.9915 0V32.2114L31.1451 32.5024V5.35692V5.35665ZM68 35.8786L67.9912 67.9447L31.1448 62.7645L31.0933 35.8185L68 35.8786Z"
            fill="url(#paint0_linear_573_3778)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_573_3778"
                x1={34}
                y1={0}
                x2={34}
                y2={67.9447}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DC6A00" />
                <stop offset={1} stopColor="#F9321F" />
            </linearGradient>
        </defs>
    </svg>
)

export default Windows