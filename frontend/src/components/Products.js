import React from 'react';
import './Product.css';

function Product({header, photo_image, price, setBasket}) {

  const product = {
    header: header,
    photo_image: photo_image,
    price: price
  }

  return (
    <div className="Product">
        <img src={photo_image} alt={ `${header} `} />
        <h2>{header}</h2>
        <p>{ `${price} руб`}</p>
        <button onClick={() => setBasket(prevState => [...prevState, product])}>Купить</button>
    </div>
  );
}

export default Product;
