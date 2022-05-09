import * as React from "react"

const Person = ({width, height, props}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3.75 3.55263C3.75 5.51132 5.4325 7.10526 7.5 7.10526C9.5675 7.10526 11.25 5.51132 11.25 3.55263C11.25 1.59395 9.5675 0 7.5 0C5.4325 0 3.75 1.59395 3.75 3.55263ZM14.1667 15H15V14.2105C15 11.1639 12.3825 8.68421 9.16667 8.68421H5.83333C2.61667 8.68421 0 11.1639 0 14.2105V15H14.1667Z"
            fill="black"
        />
    </svg>
)

export default Person