import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const modal = createSlice({
    name: 'modal',
    initialState: {
        product: {
            title: '',
            price: null,
            description: '',
            image: '',
        },
        item: [],
        modalState: false
    },
    reducers: {
        openModal: (state, action) => {
            state.item = action.payload;
            state.modalState = true;
            state.product.id = action.payload.id;
            state.product.title = action.payload.title;
            state.product.price = action.payload.price;
            state.product.description = action.payload.description;
            state.product.image = action.payload.image;
        },
        closeModal: (state) => {
            state.modalState = false;
        }
    }
})

export default modal.reducer;
export const { openModal, closeModal } = modal.actions;