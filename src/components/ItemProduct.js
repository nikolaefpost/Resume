import React from 'react';
import './Component.css'

const ItemProduct = ({product, onClick}) => {
    console.log(product?.category)
    return (
        <>
        {!!product?.category &&
        <figure className="container">
            <div className="category">{product?.category}</div>
            <div className="name">{product?.name[0].toUpperCase() + product?.name.slice(1)}</div>
            <div className="price_block">
                <div className="price_box">
                    <span className="dollar_sign">$</span>
                    <span className="price"> {product?.price}</span>

                </div>
                <input type="button"  onClick={onClick} value="BUY"/>
            </div>
        </figure>
}
    </>);
};

export default ItemProduct;