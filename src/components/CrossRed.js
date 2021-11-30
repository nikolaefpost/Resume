import * as React from "react"

const CrossRed = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="#E43F3F" />
        <path
            d="M17 7 7 17M7 7l10 10"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default CrossRed