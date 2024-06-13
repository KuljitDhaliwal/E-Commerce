import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Modal.css'
import { FaTimes } from "react-icons/fa";
import { closeModal } from '../../Redux/Slices/ModalSlice'
import {emptyModal, finalCart} from '../../Redux/Slices/CartSlice'
import Quantity from '../Quantity/Quantity';


function Modal(props) {
    const { modalState } = useSelector((state) => state.modal)
    const { cart } = useSelector((state) => state.cart)


    const dispatch = useDispatch();

    return (
        <>
            <div class={modalState ? 'cus-modal' : 'd-none'}>
                <div className="in-modal">
                    <FaTimes style={{ position: 'absolute', right: '2rem', top: '2rem', cursor: 'pointer' }} onClick={() => { dispatch(closeModal()); dispatch(emptyModal()) }} />
                    <div className="row">
                        <div className=" col-md-6 d-flex align-items-center justify-content-evenly">
                            <img src={props.image} style={{width: '300px', height: '100%', objectFit: 'contain'}} alt="" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-evenly">
                            <div className="product-details">
                                <div className="in-product-details">
                                <h4>{props.title}</h4>
                                <h3><b>${props.price}</b></h3>
                                    <p className='my-3'>{props.description}</p>
                                    {cart.map((item) => {
                                        return <Quantity item={item} quantity={item.quantity}  />
                                    })}
                                    <button className='btn my-3' style={{ border: '2px solid black', padding: '10px 20px' }} onClick={() => { dispatch(finalCart()); dispatch(closeModal()) }}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
