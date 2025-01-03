import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../state/shop.slice";

const store = configureStore({
    reducer: {  
        shop: shopReducer,
    }
})

export default store;