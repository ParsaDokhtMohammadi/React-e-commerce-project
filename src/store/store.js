import {configureStore} from "@reduxjs/toolkit"
import ProductsApiSlice from "../services/ProductsApiSlice"

export const store = configureStore({
    reducer: {
        [ProductsApiSlice.reducerPath] : ProductsApiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductsApiSlice.middleware)
})

