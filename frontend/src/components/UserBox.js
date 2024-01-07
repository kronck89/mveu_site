import React from 'react';
import './UserBox.css';

function UserBox({setModalBox, setBasket}) {
  return (
    <div className="UserBox">
      <button onClick={() => setModalBox('Login')}>Войти</button>
      <button onClick={() => setModalBox('Registration')}>Регистрация</button>
      <button className='newprod' onClick={() => setModalBox('AddProducts')}>Добавить новый товар</button>
    </div>
  );
}

export default UserBox;
