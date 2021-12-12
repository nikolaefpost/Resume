import React from 'react';

const ArrowRight = (props) => {
    return (
        <svg
            width={20}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowRight;