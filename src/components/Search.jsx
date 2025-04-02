import React from 'react'
import { useNavigate } from 'react-router'
import { useSearchMovieQuery } from '../services/ProductsApiSlice'
import {useParams , useSearchParams } from 'react-router'
import LoadingScreen from './LoadingScreen'
import Card from "./Card";
import Pagination from "./Pagination";
const Search = () => {
    const navigate = useNavigate()
    const { page: urlPage } = useParams(); 
    const page = Number(urlPage) || 1
    const [searched] = useSearchParams() 
    const query = searched.get("query")
    console.log(query)
    const {data : searchedMovies , isLoading} = useSearchMovieQuery({movie:query , page:page })
    const totalpage = searchedMovies?.total_pages
    const changePage = (newPage) => {
      navigate(`/search/${newPage}?query=${query}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    if(isLoading){
        return(
            <LoadingScreen></LoadingScreen>
        )
    }else{
        
        return (
            <>
            <div className="p-8 flex flex-col items-center">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(4,minmax(200px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))]  gap-6 min-h-[calc(100vh-329px)]">
                {searchedMovies?.results.map((movie) => (
                  <Card key={movie.id} movie={movie} />
                ))}
              </div>
              <Pagination totalpage={totalpage} page={page} changePage={changePage}></Pagination>
            </div>
          </>
        )
    }
}

export default Search