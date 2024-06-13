import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        product: [],
        finalCart: [],
        sidebarOpen: false
    },
    reducers: {
        setCartProducts: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
            } else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.cart.push(tempProduct);
            }    
        },
        setProduct: (state, action) => {
            state.product.push(action.payload)
        },
        productQuantity: (state, action) => {
            state.cartQuantity = action.payload;
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
            state.cart = state.cart.filter((item) => item.id !== action.payload)
            state.finalCart = state.cart;
        },
        emptyModal: (state) => {
            state.cart = [];
        }

    }
})

export default cart.reducer
export const {setCartProducts, itemIncrement, itemDecrement, closeSidebar, openSidebar, removeProduct, setProduct,finalCart, emptyModal} = cart.actions