import { configureStore } from '@reduxjs/toolkit'
import allData from './Slices/indexSlice'
import wishlist from './Slices/WishlistSlice'
import cart from './Slices/CartSlice'
import modal from './Slices/ModalSlice'


const store = configureStore({
    reducer: {
        data: allData,
        wishlist: wishlist,
        cart: cart,
        modal: modal
    }
})

export default store;