import React from 'react';

function Registration({setModalBox, setMessage}) {
    
    function Reg() {
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        let message
    
        const data = {
          login: login,
          password: password,
          email: email
        }
    
        console.log(data)

        const api = 'http://localhost:9001/registration'

        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        .then((result) => result.json())
        .then((result) => message = result.message)

        setTimeout(() => {
          setMessage(message)
          setModalBox('MessageBox')
        }, 100)
      }

    return (
            <>
                <h1>Регистрация:</h1>
                <input id='login' type='text' placeholder='Логин'/>
                <input id='password' type='password' placeholder='Пароль'/>
                <input id='email' type='email' placeholder='Email'/>
                <button id='enter_button' onClick={Reg}>Сохранить</button> 
            </>
      );
}

export default Registration;
