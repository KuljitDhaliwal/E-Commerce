
import './App.css';
import Home from './Components/Home/Home';
import Wishlist from './Components/Wishlist/Wishlist';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AllProdcuts from './Components/AllProducts/AllProdcuts';
import Cart from './Components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';





function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<AllProdcuts/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
