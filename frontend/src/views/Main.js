import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Products';
import photo_image from '../images/photo.jpg';

function Main({setBasket}) {

  const[products, setProducts] = useState([])
  
  useEffect(() => {
    const api = 'http://localhost:9001/products'

    fetch(api)
    .then(result => result.json())
    .then((result) => {
        console.log(result)
        setProducts(result.data)
    })
  }, [])
  
  return (
    <div className="Main">
        { products.map((item) => <Product key={item._id} header={item.header} photo_image={photo_image} price={item.price} setBasket={setBasket} />) }
    </div>
  );
}

export default Main;
