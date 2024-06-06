import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { closeSidebar } from '../Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'

function AllProdcuts() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.data);
    const { sidebarOpen } = useSelector((state) => state.cart);
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return (
        <>
            <Cart />
        <div className={sidebarOpen ? 'overlay' : ''} onClick={()=> dispatch(closeSidebar())}></div>
        <div className='allProducts py-5'>
          <h1 className='text-center mt-3'>AllProducts</h1>
          <div className="container">
              <div className="row gy-4 mt-3">
                  {state.allData.map((product, key) => {
                      return <div className="col-6 col-sm-6 col-md-4 col-lg-3 gy-3">
                          <Product title={product.title ? product.title.slice(0, 28) + '...' : ''} image={product.image} price={product.price} id={ product.id } product={product} />
                  </div>
                  })}
              </div>
        </div>
        </div>
    </>

  )
}

export default AllProdcuts
