import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, setCategory } from '../../Redux/Slices/indexSlice';
import menClothing from '../Assets/men.webp'
import womenClothing from '../Assets/women-clothes.png'
import jewelery from '../Assets/jewelery.png'
import electronics from '../Assets/headphones.png'
import './ProductList.css'



function ProductList({handleCat, cat}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const allCategories = state.allData.map((element) => {
    return element.category;
  })

  const capitalizeFLetter = (value) => {
    let capString = value[0].toUpperCase() +
      value.slice(1)
    return capString
  }

  const categories = [ ...new Set(allCategories)]

  const imgArray = [menClothing, jewelery, electronics, womenClothing]



const name1 = "categoryName";
const name2 = "categoryImage";

const combinedArray = categories.map((value, index) => ({
  [name1]: value,
  [name2]: imgArray[index]
}));
  
  



    useEffect(() => {
      dispatch(fetchData());
    }, [])
  

  return (
    <div>
          <div className="product-list p-4 my-5">
              <div className="container">
          <div className="row d-flex justify-content-center">
             {combinedArray.map((source, key) => {
               return <div className="col-6 col-md-3 d-flex align-items-center text-center flex-column" key={key}>
                 <div className="round-card" style={{
                   border: cat === source.categoryName ? '5px solid grey' : ''
                   
                 }} onClick={(e) => { dispatch(setCategory(source.categoryName)); handleCat(source.categoryName) }}>
                          <img src={source.categoryImage} alt=""/>
                </div>
                <p>{ capitalizeFLetter(source.categoryName) }</p>
                      </div>
            })}
          </div>
            </div>
      </div>
    </div>
  )
}

export default ProductList
