import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FAILED, IDLE, LOADING } from "./status";

export const fetchProductsOnScreen = createAsyncThunk('screenProducts/fetchProductsOnScreen', async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data.slice(0, 10);
});

export const addProductToCart = createAsyncThunk('cartProducts/addProductToCart', async(productId) => {
    const response = await axios.get('https://fakestoreapi.com/products')
    const product = response.data.find((product) => (product.id) === productId)
    return product
})

export const removeProductFromCart = createAsyncThunk('cartProducts/removeProductsFromCart', async(productId) => {
    return productId;
})

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        status: IDLE,
        shop: { products: [], cart: [] },
    },

    reducers: {
        addCart: ( state, action ) => {
            state.shop.cart.push(action.payload);
        },

        removeProduct: (state, action) => {
            state.shop.cart = state.shop.cart.filter((product, index) => index !== action.payload)
        }
    },

    extraReducers: builder => {
        builder 
            .addCase(fetchProductsOnScreen.pending, (state, action) => {
                console.log("Pending: ", action)
                state.status = LOADING;
            })
            .addCase(fetchProductsOnScreen.fulfilled, ( state, action ) =>  {
                console.log("Fulfilled: ", action)
                state.shop.products = action.payload
            })
            .addCase(fetchProductsOnScreen.rejected,( state, action ) => {
                console.log("Rejected: ", action)
                state.status = FAILED;
            })
            .addCase(addProductToCart.fulfilled, (state, action) => {
                const ProductoExistente = state.shop.cart.find((product) => (product.id) === (action.payload.id));
                if(!ProductoExistente) {
                    state.shop.cart.push(action.payload)
                }
                console.log(action)
            })

            .addCase(removeProductFromCart.fulfilled, ( state, action ) => {
                state.shop.cart = state.shop.cart.filter(product => (product.id) !== action.payload)
            })
    }
})

export const { addCart, removeProduct} = shopSlice.actions;

export const { reducer: shopReducer } = shopSlice; 
export default shopSlice.reducer;
