import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { selectWishlistProduct } from '../../Redux/Slices/WishlistSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import './Product.css'
import {openModal} from '../../Redux/Slices/ModalSlice'
import { setProduct } from '../../Redux/Slices/CartSlice';


function Product(props) {
    const { wishlistedProducts } = useSelector((state) => state.wishlist)
    const isWishlisted = wishlistedProducts.map((Element) => {
        return Element.id;
    });
    const checkIsinclide = isWishlisted.includes(props.id);

    const dispatch = useDispatch();
    const iconStyle = {
        fontSize: '1.5rem',
        color: 'white'
    }
    const heartColor = {
        color: 'red',
        fontSize: '1.5rem'
    }

    return (
        <div className="product-card">
            <div className="in-card">
                <img src={props.image} alt="" />
                <div className="hover-card-details">
                    <div className="iconBack" onClick={(e) => dispatch(selectWishlistProduct(props.product))}>
                        <FaHeart style={checkIsinclide ? heartColor : iconStyle} />
                    </div>
                    <div className="iconBack" onClick={(e) => dispatch(openModal(props.product))}>
                        <IoEyeOutline type='button' style={iconStyle} />
                    </div>
                </div>
            </div>
            <div className="description text-center">
                <div className="brand">
                    <p><small>Aulks</small></p>
                </div>
                <p>{props.title}</p>
                <div className="price-add-to-cart mt-3">
                    <div className="in-price">
                        <p className='price'>${props.price}</p>
                        <p className='cart-style' onClick={(e) => { dispatch(openModal(props.product)); dispatch(setProduct(props.product)) }}><b>Add to cart</b></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
