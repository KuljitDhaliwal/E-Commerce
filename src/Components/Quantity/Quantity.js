import React from 'react'
import './Quantity.css'
import { itemDecrement, itemIncrement } from '../../Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'

function Quantity(props) {
    const dispatch = useDispatch()
    return (
        <div className="quantity">
            <button href="#" disabled={props.quantity <= 1 ? 'disbaled' : ''} className="quantity__minus" onClick={()=>dispatch(itemDecrement(props.product))}><span>-</span></button>
            <input name="quantity" type="text" className="quantity__input" value={props.quantity}/>
            <button href="#" className="quantity__plus" onClick={()=>dispatch(itemIncrement(props.product))}><span>+</span></button>
        </div>
    )
}

export default Quantity
