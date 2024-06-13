import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'





//Action
export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    return data
})




const allData = createSlice({
    name: "allData",
    initialState: {
        isLoading: false,
        allData: [],
        filteredProdcuts: [],
        selectedCategory: [],
        isError: false,
        searchedProduct: []
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            if (action.payload) {
                state.filteredProdcuts = state.allData.filter((item) => item.category === action.payload)
            } else {
                state.filteredProdcuts = state.allData.filter((item) => item.category === "electronics")
            }
        },
        searchProduct: (state, action) => {
            if (action.payload) {
                state.searchedProduct = state.allData.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
            } else {
                state.searchedProduct = [];
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;

        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allData = action.payload;
            state.filteredProdcuts = state.allData.filter((item) => item.category === "men's clothing")
            state.selectedCategory = action.payload
        })
        builder.addCase(fetchData.rejected, (state) => {
            state.isError = true;
        })
        
    }
})

export default allData.reducer;
export const { setCategory, searchProduct } = allData.actions;