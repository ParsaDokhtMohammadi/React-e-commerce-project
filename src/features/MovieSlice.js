import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () =>{
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
}
 

const initialState = {
    favorites : loadFavorites()
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
        }
    }
})

export const handleFavoritesButtonRender = (state , movieId) =>{
    return state.Movies.favorites.some(movie => movie.id === movieId);
}


export const {handleFavorites } = movieSlice.actions

export default movieSlice.reducer