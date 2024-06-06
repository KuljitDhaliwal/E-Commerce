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
        isError: false
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredProdcuts = state.allData.filter((item) => item.category === action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;

        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allData = action.payload;
            state.filteredProdcuts = action.payload
            state.selectedCategory = action.payload
        })
        builder.addCase(fetchData.rejected, (state) => {
            state.isError = true;
        })
        
    }
})

export default allData.reducer;
export const { setCategory } = allData.actions;