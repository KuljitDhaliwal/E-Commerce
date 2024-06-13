import { createSlice } from "@reduxjs/toolkit";



const search = createSlice({
    name: 'search',
    initialState: {
        filteredProduct: [],
        products: []
    },
    reducers: {
        allProducts: (state, action) => {
            state.products = action.payload;
        },
        searchProduct: (state, action) => {
            state.filteredProduct = state.products.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        }
    }
})

export default search.reducer;
export const { allProducts, searchProduct } = search.actions;