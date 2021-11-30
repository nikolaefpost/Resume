import React from 'react';
import ItemProduct from "./ItemProduct";

const ListProducts = ({products, setModal, setModalContent}) => {
    return (
        <>
            <section className="App">
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