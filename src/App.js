
import styles from './App.module.css';
import React, {useEffect, useState} from "react";
import ButtonCheapest from "./components/ButtonCheapest";
import ModalWindows from "./page/ModalWindows";
import ListProducts from "./components/ListProducts";
import {Clock} from "./components/Temp";

function App() {
    console.log(styles)
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isModal, setModal] = React.useState(false)
    const [modalContent, setModalContent] = useState({})

    const onClose = () => setModal(false)

    useEffect(() => {
        let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');

        fetch("http://localhost:4000",{
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


  return (<>
          <article className={styles.content}>
              {!isLoaded && <div> Загрузка...</div>}

              {!!error && <div>Ошибка: {error.message}</div>}

              {products.length && <ListProducts
                  products={products}
                  setModal={setModal}
                  setModalContent={setModalContent}
              />}
              {!error && <ButtonCheapest
                  onClick={() => {
                      setModal(true)
                      setModalContent(products.reduce((a, b) => a.price < b.price ? a : b))
                  }}
                  products={products}
                  val="Buy cheapest"
              />}
          </article>
          <Clock/>
          <ModalWindows
              visible={isModal}
              product={modalContent}
              onClose={onClose}
          />
      </>
  );
}

export default App ;
