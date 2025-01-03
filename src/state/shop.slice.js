import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        shop: { products: [], cart: [] },
    },

    reducers: {
        addCart: ( state, action ) => {
            state.shop.cart.push(action.payload);
        },

        removeProduct: (state, action) => {
            state.shop.cart = state.shop.cart.filter(product => product.id !== action.payload);
        }
    },
})

export const { addCart, removeProduct} = shopSlice.actions;

export const { reducer: shopReducer } = shopSlice; 
export default shopSlice.reducer;
