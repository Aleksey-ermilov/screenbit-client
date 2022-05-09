import * as React from "react"

const MessagesActiveSvg = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M23.837 6.159a12.5 12.5 0 0 0-20.35 13.75c.12.248.16.528.113.8l-1.1 5.287a1.25 1.25 0 0 0 .337 1.138 1.25 1.25 0 0 0 .913.362H4l5.35-1.075c.272-.032.547.006.8.113A12.5 12.5 0 0 0 23.9 6.184l-.063-.025ZM10 16.246a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm5 0a1.25 1.25 0 1 1 0-2.501 1.25 1.25 0 0 1 0 2.501Zm5 0a1.25 1.25 0 1 1 0-2.501 1.25 1.25 0 0 1 0 2.501Z"
            fill="url(#a)"
        />
        <defs>
            <linearGradient
                id="a"
                x1={15.03}
                y1={2.469}
                x2={15.03}
                y2={27.551}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DC6A00" />
                <stop offset={1} stopColor="#F9321F" />
            </linearGradient>
        </defs>
    </svg>
)

export default MessagesActiveSvg