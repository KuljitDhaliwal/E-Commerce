import React, { useEffect } from 'react'
import './Search.css'
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import {searchProduct} from '../../Redux/Slices/indexSlice'



function Search({ openSearch, handleClick }) {



  if (openSearch) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const dispatch = useDispatch();


  const state = useSelector((state) => state.data);

  console.log('Nanu', state.searchedProduct)



    
  return (
    <div className={openSearch ? 'search bottom' : 'search'}>
        <div className="container">
          <FaTimes style={{ position: 'absolute', right: '2rem', top: '2rem', cursor: 'pointer' }} onClick={handleClick} />
          <div className="in-search">
            <div className="in-search-data">
              <h1 className='text-center'>Search Products</h1>
            <input type="search" name="" id="" placeholder='Search...' onChange={(e) => dispatch(searchProduct(e.target.value))} />
          </div>
        </div>
        <div className="show-products">
          <div className="row py-5">
            {state.searchedProduct.map((item) => {
              return <div className="col-md-3">
                <Product id={item.id} image={item.image} product={item} price={item.price} title={item.title } />
              </div>
            })}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Search
