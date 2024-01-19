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
import MessageBox from './components/MessageBox';



function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const[basket, setBasket] = useState([])
  const [message, setMessage] = useState('')
  
  const pages = {
    Main: <Main setBasket={setBasket}/>,
    Basket: <Basket basket={basket} setBasket={setBasket} setModalBox={setModalBox}/>,
    UserCabinet: <UserCabinet />
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>,
    AddProducts: <ModalBox setModalBox={setModalBox}><AddProducts /></ModalBox>,
    PayProducts: <ModalBox setModalBox={setModalBox}><PayProducts /></ModalBox>,
    MessageBox: <ModalBox setModalBox={setModalBox}><MessageBox setModalBox={setModalBox} message={message} /></ModalBox>
  }

  return (
    <div className="App">
        <Header setPage={setPage} setModalBox={setModalBox} basket={basket} setBasket={setBasket} />
        { pages[page] }
        { modalBoxes[modalBox] }
        <Footer />
    </div>
  );
}

export default App;
