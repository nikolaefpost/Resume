import React from 'react';
import styles from  './Component.module.css'

const ButtonCheapest = ({val, onClick}) => {
    return (
        <>
            <input className={styles.cheapest} type="button" value={val} onClick={onClick}/>
        </>
    );
};

export default ButtonCheapest;