import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTruckFast } from "react-icons/fa6";
import './Cart.css'
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { itemIncrement, itemDecrement, closeSidebar } from '../Redux/Slices/CartSlice'
import { BsFillCartXFill } from "react-icons/bs";
import {removeProduct} from '../Redux/Slices/CartSlice'






function Cart() {
    const state = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    var totalPrice = 0;

    return (
    <div className={`cart py-3 ${state.sidebarOpen ? 'open' : 'close'}`}>
          <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                  <h4>Shopping Cart({state.cart.length})</h4>
                  <IoMdClose style={{fontSize: '1.5rem', cursor: 'pointer'}} onClick={()=> dispatch(closeSidebar())}/>
              </div>
              <div className="truck">
                  <div className="truck-road py-5">                      
                    <div className="road">
                            <div className={state.cart <=0 ? 'road-track grey' : 'road-track red'}></div>
                            <div className={state.cart.length <=0 ? 'truck-icon grey left' : 'truck-icon red right'}>
                                <FaTruckFast className='truckicon'/>
                        </div>
                    </div>
                        <p className='mt-4'>Congratulations! You've got free shipping!</p>
                  </div>
              </div>
              <h4 className={state.cart.length <= 0 ? 'd-none' : 'd-flex'}>Your Order</h4>
              <div className={state.cart.length <=0 ? 'empty-cart' : 'd-none'}>
                  <BsFillCartXFill style={{ fontSize: '8rem' }} />
                  <h4 className='mt-4'>Your cart is empty.</h4>
                  <p className='text-center'>You may check out all the available products and buy some in the shop.</p>
                  <button className='btn btn-dark mt-4' onClick={()=> dispatch(closeSidebar())}>Return to Shop</button>
              </div>
              <div className="scroll-table">     
              <table>
                  <thead>
                      <tr>
                          <th>Product</th>
                          <th>Name</th>
                          <th>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                {state.cart.map((item, key) => {
                    totalPrice += item.price * item.quantity
                      return  <tr>
                              <td><img src={item.image} alt="" height="100px" /></td>
                              <td className='p-4'>{item.title} <br /> ${item.price} <br />
                                <div className="cus-container">        
                                    <div className="quantity">
                                          <button href="#" disabled={item.quantity <=1 ? 'disbaled' : ''} className="quantity__minus" onClick={(e) => dispatch(itemDecrement(item))}><span>-</span></button>
                                          <input name="quantity" type="text" className="quantity__input" value={ item.quantity } />
                                        <button href="#" className="quantity__plus" onClick={(e)=>dispatch(itemIncrement(item))}><span>+</span></button>
                                    </div>
                                </div>
                              </td>
                          <td><MdDelete style={{ color: 'red', fontSize: '2rem', cursor: 'pointer' }} onClick={(e)=>dispatch(removeProduct(item.id))}/></td>
                      </tr>
                  })}
                 </tbody>
              </table>
              </div>
        </div>
              <div className={state.cart.length <=0 ? 'd-none' : 'total d-flex align-items-center justify-content-between'}>
                    <h4>Subtotal</h4>
                <b>${totalPrice}</b>
              </div>
    </div>
  )
}

export default Cart
