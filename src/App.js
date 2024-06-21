
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AllProdcuts from './Pages/AllProducts/AllProdcuts';
import { Routes, Route } from 'react-router-dom';
import Search from './Components/Search/Search';
import { useState } from 'react';
import Wishlist from './Pages/Wishlist/Wishlist';
import Modal from './Components/Modal/Modal';
import { useSelector } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Login from './Pages/Login/Login'
import LoginModal from './Components/LoginModal/LoginModal';




function App() {
  const { product } = useSelector((state) => state.modal);
  const state = useSelector((state) => state.cart);

  const [openSearch, setOpenSearch] = useState(false);
  const handleSearch = () => {
    setOpenSearch(!openSearch)
  }

  // SetLoginModal

  const [login, setLogin] = useState(false);

  return (
    <>
      <Navbar handleClick={handleSearch} setLogin={setLogin} />
      <Cart />
      <LoginModal setLogin={setLogin} login={login} />
      <Modal price={product.price} product={product} image={product.image} id={product.id} description={product.description} title={product.title}  />
      <Search openSearch={openSearch} handleClick={ handleSearch } />
      <Routes>
        <Route path='/' element={<Home openSearch={openSearch}/>}></Route>
        <Route path='/products' element={<AllProdcuts/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
