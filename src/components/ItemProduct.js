import React from 'react';
import styles from  './Component.module.css'

const ItemProduct = ({product, onClick}) => {
    return (
        <>
        {!!product?.category &&
        <figure className={styles.container}>
            <div className={styles.category}>{product?.category}</div>
            <div className={styles.name}>{product?.name[0].toUpperCase() + product?.name.slice(1)}</div>
            <div className={styles.price_block}>
                <div className={styles.price_box}>
                    <span className={styles.dollar_sign}>$</span>
                    <span className={styles.price}> {product?.price}</span>

                </div>
                <input type="button"  onClick={onClick} value="BUY"/>
            </div>
        </figure>
}
    </>);
};

export default ItemProduct;