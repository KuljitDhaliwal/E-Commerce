import React from 'react'
import {itemIncrement, itemDecrement} from '../../Redux/Slices/CartSlice'
import './Quantity.css'
import { useDispatch } from 'react-redux'

function Quantity(props) {
    const dispatch = useDispatch();
    return (
        <div className="quantity">
            <button href="#" disabled={props.quantity <= 1 ? 'disbaled' : ''} className="quantity__minus" onClick={(e) => dispatch(itemDecrement(props.item))}><span>-</span></button>
            <input name="quantity" type="text" className="quantity__input" value={props.quantity} />
            <button href="#" className="quantity__plus" onClick={(e) => dispatch(itemIncrement(props.item))}><span>+</span></button>
        </div>
    )
}

export default Quantity
