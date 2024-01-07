import React from 'react';
import './ProductBasket.css';

function ProductBasket({header, photo_image, price, setBasket}) {

  return (
    <div className="Product">
      <img src={photo_image} alt={ `${header} `} />
      
      <h2>{header}</h2>
      <p>{ `${price} руб`}</p>
      <button onClick={() => setBasket(current => current.filter(basket => {return basket.header !== header}))}>Удалить</button>
    </div>
  );
}

export default ProductBasket;