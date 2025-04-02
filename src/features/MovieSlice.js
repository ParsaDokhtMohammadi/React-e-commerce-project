import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () =>{
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
}
const loadCart = () =>{
    const savedCartItems = localStorage.getItem("cart")
    return savedCartItems ? JSON.parse(savedCartItems) : []
}
 

const initialState = {
    favorites : loadFavorites() ,
    cart : loadCart()
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers : {
        handleFavorites : (state , action)=>{
            const target = state.favorites.find(movie=> movie.id == action.payload.id)
            if (target) {
                state.favorites = state.favorites.filter(movie => movie.id != target.id)
                localStorage.setItem("favorites",JSON.stringify(state.favorites))
            }else{
                state.favorites.push(action.payload)
                localStorage.setItem('favorites',JSON.stringify(state.favorites))
            }
        },
        handleCart : (state , action)=>{
            const target = state.cart.find(movie=> movie.id == action.payload.id)
            if (target) {
                state.cart = state.cart.filter(movie => movie.id != target.id)
                localStorage.setItem("cart",JSON.stringify(state.cart))
            }else{
                state.cart.push(action.payload)
                localStorage.setItem('cart',JSON.stringify(state.cart))
            }
        },
    }
})

export const handleFavoritesButtonRender = (state , movieId) =>{
    return state.Movies.favorites.some(movie => movie.id === movieId);
}
export const handleCartButtonRender = (state , movieId) =>{
    return state.Movies.cart.some(movie => movie.id === movieId);
}


export const {handleFavorites , handleCart } = movieSlice.actions

export default movieSlice.reducer