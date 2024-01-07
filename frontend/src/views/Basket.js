import React from 'react';
import './Basket.css';
import ProductBasket from '../components/ProductBasket';
import photo_image from '../images/photo.jpg';

function Basket({basket, setBasket, setModalBox}) {

      let summ = 0
      basket.forEach(function(item, index, array) {
          summ = summ + item.price
      });

      let pay = ""

      if (basket.length > 0) {
        pay = <button className="neworder" onClick={() => setModalBox('PayProducts')}>Оплатить заказ</button>
      }


   return (
    <div className="Cart">
        <h1>Корзина</h1>
        <h3 id="count">{basket.length} - товара (ов)</h3>
        <h3 id="summorder">Сумма заказа {summ} руб.</h3>
        <h3>{pay}</h3>
        <div className="Main">
          {React.Children.toArray(
            basket.map((item) => <ProductBasket header={item.header} photo_image={photo_image} price={item.price} setBasket={setBasket}/>)
          )}
        </div>
    </div>
  );
}

export default Basket;
