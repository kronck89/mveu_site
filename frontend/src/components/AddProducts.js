import React from 'react';

function AddProducts() {
    
    function addProd() {
        const header = document.getElementById('header').value
        const price = document.getElementById('price').value
    
        const data = {
          header: header,
          price: price
        }
    
        console.log(data)

        const api = 'http://localhost:9001/product'

        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
            console.log(result)
        }) 

      }

    return (
            <>
                <h1>Добавить новый товар:</h1>
                <input id='header' type='text' placeholder='Наименование товара'/>
                <input id='price' type='text' placeholder='Цена товара'/>
                <button id='enter_button' onClick={addProd}>Добавить товар в базу</button> 
            </>
      );
}

export default AddProducts;
