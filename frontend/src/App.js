import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import AddProducts from './components/AddProducts';
import PayProducts from './components/PayProducts';
import UserCabinet from './components/UserCabinet';


function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const[basket, setBasket] = useState([])
  
  const pages = {
    Main: <Main setBasket={setBasket}/>,
    Basket: <Basket basket={basket} setBasket={setBasket} setModalBox={setModalBox}/>,
    UserCabinet: <UserCabinet />
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>,
    AddProducts: <ModalBox setModalBox={setModalBox}><AddProducts /></ModalBox>,
    PayProducts: <ModalBox setModalBox={setModalBox}><PayProducts /></ModalBox>
  }

  return (
    <div className="App">
        <Header setPage={setPage} setModalBox={setModalBox} />
        { pages[page] }
        { modalBoxes[modalBox] }
        <Footer />
    </div>
  );
}

export default App;
