import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "../slices/productsSlice"
import filtersSlice from "../slices/filtersSlice"
import cartSlice from "../slices/cartSlice"
 
const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        filters: filtersSlice.reducer,
        cart: cartSlice.reducer
    }
})
export default store