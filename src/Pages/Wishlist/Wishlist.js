import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../Components/Product/Product'
import Cart from '../../Components/Cart/Cart';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../Redux/Slices/CartSlice';
import cart from '../../Components/Assets/emptyCart.webp'
import './Wishlist.css'
import { Link } from 'react-router-dom';

function Wishlist() {
  const { sidebarOpen } = useSelector((state) => state.cart);
  if (sidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  const dispatch = useDispatch();
  const state = useSelector((state => state.wishlist))
  if (state.wishlistedProducts.length === 0) {
    return <>
      <Cart />
      <div className={sidebarOpen ? 'overlay' : ''} onClick={() => dispatch(closeSidebar())}></div>
      <div className="d-flex flex-column wishlist">
          <img src={cart} alt="" />
        <Link to={'/products'}>
          <button style={{ padding: '10px 20px', border: '1px solid black', borderRadius: '10px' }}>Let's Shopping</button>
        </Link>
      </div>
    </>
  }
  return (
    <>
      <Cart />
      <div className={sidebarOpen ? 'overlay' : ''} onClick={() => dispatch(closeSidebar())}></div>
      <div className='wishlist py-5'>
        <div className="container">
          <div className="row">
            {state.wishlistedProducts.map((product, key) => {
              return <div className="col-md-3">
                <Product title={product.title} price={product.price} image={product.image} id={product.id} product={product} />
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
