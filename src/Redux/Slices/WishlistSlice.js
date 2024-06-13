import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistedProducts: [],
        wishlistProductQuantity: 0,
        
    },
    reducers: {
        selectWishlistProduct: (state, action) => {
            const product = action.payload;
            
            const productId = state.wishlistedProducts.map((item) => {
                return item.id
            })

            if (productId.includes(product.id)) {
                state.wishlistedProducts = state.wishlistedProducts.filter((item)=> item.id !== action.payload.id)
            } else {
                state.wishlistedProducts.push(product);
            }
            
        }
    }
})

export const { selectWishlistProduct } = wishlist.actions;
export default wishlist.reducer;