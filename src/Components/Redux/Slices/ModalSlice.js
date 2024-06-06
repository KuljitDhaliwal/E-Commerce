import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name: 'modal',
    initialState: {
        productId : null
    },
    reducers: {
        openModal: (state, action) => {
            state.productId = action.payload
        }
    }
})

export default modal.reducer;
export const { openModal } = modal.actions;