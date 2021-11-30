import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import ItemProduct from "./components/ItemProduct";
import ButtonCheapest from "./components/ButtonCheapest";
import ModalWindows from "./page/ModalWindows";
import ListProducts from "./components/ListProducts";

function App() {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isModal, setModal] = React.useState(false)
    const [modalContent, setModalContent] = useState({})

    const onClose = () => setModal(false)

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
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
          <article className="content">
              {!isLoaded && <div> Загрузка...</div>}

              {!!error && <div>Ошибка: {error.message}</div>}

              {products.length && <ListProducts
                  products={products}
                  setModal={setModal}
                  setModalContent={setModalContent}
              />}
              <ButtonCheapest
                  onClick={() => {
                      setModal(true)
                      setModalContent(products.reduce((a, b) => a.price < b.price ? a : b))
                  }}
                  products={products}
                  val="Buy cheapest"
              />
          </article>
          <ModalWindows
              visible={isModal}
              product={modalContent}
              onClose={onClose}
          />
      </>
  );
}

export default App;
