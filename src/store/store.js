import {configureStore} from "@reduxjs/toolkit"
import ProductsApiSlice from "../services/ProductsApiSlice"
import MovieSlice from "../features/MovieSlice"
export const store = configureStore({
    reducer: {
        Movies : MovieSlice ,
        [ProductsApiSlice.reducerPath] : ProductsApiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductsApiSlice.middleware)
})

