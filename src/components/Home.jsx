import React from 'react'
import { useGetTrendingMoviesQuery , useGetMovieDetailsQuery , useSearchMovieQuery , useGetMoviesByGenreQuery } from '../services/ProductsApiSlice'
const Home = () => {
    const {data : Trendings} = useGetTrendingMoviesQuery() 
    const {data : movies} = useGetMoviesByGenreQuery(28)
    console.log(movies)
  return (
    <div>Home</div>
  )
}

export default Home

