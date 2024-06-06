import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartQuantity: null,
        totalPrice: null,
        sidebarOpen: false
    },
    reducers: {
        setCartProducts: (state, action) => {
            state.sidebarOpen = true;
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
                state.totalPrice += state.cart[itemIndex].price; 
            } else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.cart.push(tempProduct);
            }
        },
        itemIncrement: (state, action) => {
            const itemIndex = state.cart.findIndex((item) =>  item.id === action.payload.id );
            state.cart[itemIndex].quantity += 1;
        },
        itemDecrement: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            state.cart[itemIndex].quantity -= 1;
        },
        openSidebar: (state) => {
            state.sidebarOpen = true;
        },
        closeSidebar: (state) => {
            state.sidebarOpen = false;
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((item)=> item.id !== action.payload)
        }

    }
})

export default cart.reducer
export const {setCartProducts, itemIncrement, itemDecrement, closeSidebar, openSidebar, removeProduct} = cart.actions