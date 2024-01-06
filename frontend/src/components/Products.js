import React from 'react';
import './Product.css';

function Product({header, photo_image, price}) {
  return (
    <div className="Product">
        <img src={photo_image} alt='My custom good' />
        <h2>{header}</h2>
        <p>{ `${price} руб`}</p>
        <button>В корзину</button>
    </div>
  );
}

export default Product;
