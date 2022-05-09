import * as React from "react"

const Marker = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 10 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.00005 0C2.24318 0 5.09029e-05 2.24312 5.09029e-05 4.99687C-0.0180741 9.025 4.81005 12.365 5.00005 12.5C5.00005 12.5 10.0182 9.025 10.0001 5C10.0001 2.24313 7.75693 0 5.00005 0ZM5.00005 7.5C3.6188 7.5 2.50005 6.38125 2.50005 5C2.50005 3.61875 3.6188 2.5 5.00005 2.5C6.3813 2.5 7.50005 3.61875 7.50005 5C7.50005 6.38125 6.3813 7.5 5.00005 7.5Z"
            fill="black"
        />
    </svg>
)

export default Marker