import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import ProductCards from '../ProductCards/ProductCards'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero Section/Hero'
import Features from '../Features/Features'
import Gender from '../Gender/Gender'
import ProductList from '../ProductList/ProductList'
import ManWoman from '../ManWoman/ManWoman'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import './Home.css'
import { closeSidebar } from '../Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'




function Home() {

  const dispatch = useDispatch();

  const { sidebarOpen } = useSelector((state) => state.cart);
  if (sidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div>
      <Cart />
      <div className='home'>
        <div className={sidebarOpen ? 'overlay' : ''} onClick={() => dispatch(closeSidebar())}></div>
      <Hero />
      <Features />
      <Gender/>
      <ProductList/>
      <ProductCards />
      <ManWoman />
    </div>
    </div>
  )
}

export default Home
