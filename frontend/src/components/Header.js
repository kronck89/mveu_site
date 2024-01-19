import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox, basket, setBasket}) {

   return (
    <div className="Header">
      <ul>
        <li onClick={() => setPage('Main') }>Главная</li>
        <li onClick={() => setPage('Basket') }>Корзина<span className='countbasket'><b>{basket.length} шт.</b></span></li>
        <li onClick={() => setPage('UserCabinet') }>Пользователи</li>
      </ul>
      <UserBox setModalBox={setModalBox} setPage={setPage} />
    </div>
  );
}

export default Header;
