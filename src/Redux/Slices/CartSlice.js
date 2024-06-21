import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        productQuantity: 1,
        quantities: {},
        sidebarOpen: false
    },
    reducers: {
        setCartProducts: (state, action) => {
            const { quantity, id } = action.payload;
            const itemIndex = state.cart.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += quantity;
            } else {
                state.cart.push(action.payload);
            }    
        },
        itemIncrement: (state, action) => { 
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
                state.productQuantity += 1;
            } else {
                state.productQuantity += 1;
            }
        },
        itemDecrement: (state) => {
            state.productQuantity -= 1;
        },
        resetQuantity: (state) => {
            state.productQuantity = 1;  
        },
        openSidebar: (state) => {
            state.sidebarOpen = true;
        },
        closeSidebar: (state) => {
            state.sidebarOpen = false;
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
            state.finalCart = state.cart;
        }

    }
})

export default cart.reducer
export const {setCartProducts, itemIncrement, itemDecrement, closeSidebar, openSidebar, removeProduct, resetQuantity} = cart.actions