import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Slices/indexSlice';
import Loading from '../Loading';
import './ProductCards.css'
import Product from '../Product/Product';

function ProductCards() {
    const dispatch = useDispatch();
  const {allData, filteredProdcuts, selectedCategory} = useSelector((state) => state.data);
  console.log('Filtered', filteredProdcuts)

    useEffect(() => {
        dispatch(fetchData())
    }, [])
  if (allData.isLoading) {
    return <Loading/>
  }
  return (
    <div className="container my-5">
      <div className="products-text text-center" >
        <div className="product-text-line">
          <hr /><h1>New Products</h1><hr />
      </div>
      <p>Collect your loves with our newest arrivals.</p>
      </div>
            <div className="row d-flex justify-content-center">
          {filteredProdcuts.map((Element, key) => {
                    return  <div className="col-6 col-sm-6 col-md-4 col-lg-3 gy-3" key={key}>
                      <Product image={Element.image} title={Element.title.slice(0, 30)} price={Element.price} product={Element} id={Element.id} />
                            </div>
                    })}      
            </div>
        </div>
  )
}

export default ProductCards
