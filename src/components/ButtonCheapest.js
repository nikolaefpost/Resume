import React from 'react';
import './Component.css'

const ButtonCheapest = ({val, onClick}) => {
    return (
        <>
            <input className="cheapest" type="button" value={val} onClick={onClick}/>
        </>
    );
};

export default ButtonCheapest;