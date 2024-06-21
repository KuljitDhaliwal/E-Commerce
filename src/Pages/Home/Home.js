import React, {useState} from 'react'
import ProductCards from '../../Components/ProductCards/ProductCards'
import Hero from '../../Components/Hero Section/Hero'
import Features from '../../Components/Features/Features'
import Gender from '../../Components/Gender/Gender'
import ProductList from '../../Components/ProductList/ProductList'
import ManWoman from '../../Components/ManWoman/ManWoman'
import Cart from '../../Components/Cart/Cart'
import { useSelector } from 'react-redux'
import './Home.css'
import { closeSidebar } from '../../Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'




function Home({openSearch}) {

  const dispatch = useDispatch();

  const { sidebarOpen } = useSelector((state) => state.cart);

  if (sidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // SetCategory

  const [cat, setCat] = useState("men's clothing");
  const handleCat = (e) => {
    setCat(e)
  }

  //Modal Handling



  return (
    <div>


      <div className='home'>
      <div className={sidebarOpen ? 'overlay' : ''} onClick={() => dispatch(closeSidebar())}></div>
      <Hero />
      <Features />
      <Gender />
      <ProductList handleCat={handleCat} cat={ cat} />
      <ProductCards cat={cat} />
      <ManWoman />
    </div>
    </div>
  )
}

export default Home
