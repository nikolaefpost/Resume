import React from 'react';
import ItemProduct from "./ItemProduct";
import styles from "../App.css"

const ListProducts = ({products, setModal, setModalContent}) => {
    return (
        <>
            <section className={styles.app}>
                {products.map(item => (
                    <ItemProduct
                        key={item.name}
                        product={item}
                        onClick={() => {
                            setModal(true)
                            setModalContent(item)
                        }}
                    />
                ))}
            </section>
        </>
    );
};

export default ListProducts;