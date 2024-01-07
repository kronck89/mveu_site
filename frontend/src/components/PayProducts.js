import React from 'react';

function PayProducts() {
    
    let count = document.getElementById('count').innerHTML;
    let summorder = document.getElementById('summorder').innerHTML;
    
    const data = {
        count: count,
        summorder: summorder
    }
    console.log(data)

    function payProd() {

      const cardnumber = document.getElementById('cardnumber').value
      const carddate = document.getElementById('carddate').value
      const cardcvc = document.getElementById('cardcvc').value
      
      const validcardnumber = cardnumber.match(/^\d+$/)
      const validcardnumberdate = carddate.match(/^\d+$/)
      const validcardnumbercvc = cardcvc.match(/^\d+$/)

      if (!validcardnumber || !validcardnumberdate || !validcardnumbercvc || !validcardnumber.length === 0) {
        document.getElementById('cartMsg').innerText = "Данные карты должны состоять только из цифр"
        return
      }
      else {
        document.getElementById('cartMsg').innerText = "Спасибо за заказ"
      }

        const api = 'http://localhost:9001/payproducts'

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
                <h1>Оплатить заказ</h1>
                <span>{summorder}</span><br />
                <span>{count}</span><br />
                <input id='cardnumber' type='text' placeholder='Номер карты'/>
                <input id='carddate' type='text' placeholder='Дата карты'/>
                <input id='cardcvc' type='text' placeholder='Код'/>
                <button id='neworder' className='neworder' onClick={payProd}>Оплатить</button> 
                <p id='cartMsg'></p>
            </>
      );
}

export default PayProducts;
