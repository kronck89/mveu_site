import React from 'react';

function Login({setModalBox, setMessage}) {
    
    function Log() {
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        let message

        const data = {
          login: login,
          password: password
        }
    
        console.log(data)

        const api = 'http://localhost:9001/login'

        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
            message = result.message
            console.log(result)
            localStorage.setItem('token', result.token)
        })
        
        setTimeout(() => {
          setMessage(message)
          setModalBox('MessageBox')
        }, 100)
      }


    return (
            <>
                <h1>Логин:</h1>
                <input id='login' type='text' placeholder='Логин'/>
                <input id='password' type='password' placeholder='Пароль'/>
                <button id='enter_button' onClick={Log}>Войти</button> 
            </>
      );
}

export default Login;
