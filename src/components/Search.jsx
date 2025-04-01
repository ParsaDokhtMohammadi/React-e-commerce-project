import React from 'react'
import { useSearchMovieQuery } from '../services/ProductsApiSlice'
import { useSearchParams } from 'react-router'
import LoadingScreen from './LoadingScreen'
const Search = () => {
    const [searched] = useSearchParams()
    const query = searched.get("query")
    const {data : searchedMovies , isLoading} = useSearchMovieQuery(query)
    console.log(searchedMovies)
    if(isLoading){
        return(
            <LoadingScreen></LoadingScreen>
        )
    }else{
        
        return (
          <div>Search
              {query}
          </div>
        )
    }
}

export default Search