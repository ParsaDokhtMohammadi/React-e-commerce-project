import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"
import useWindowSize from "../hooks/useWindowSize";
import { handleFavoritesButtonRender , handleFavorites } from "../features/MovieSlice";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router";
const Card = (movie) => {
    const dispatch = useDispatch()
    const screenwidth = useWindowSize()
    const maxChar = screenwidth < 1000 ? 50 : 150
    var isFavorite = useSelector(state => handleFavoritesButtonRender(state , movie.movie.id))
  return (
    <>
      <div className=" h-[466px] lg:h-[812px] flex flex-col gap-1.5 items-center justify-between rounded-lg shadow-lg bg-[#1E1E1E] p-1.5 lg:p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
          alt={movie.movie.title}
          className=" h-[250px] lg:h-[550px] w-full object-fill rounded-lg"
        />
        <h2 className="lg:text-[24px]">{movie.movie.title}</h2>
        <p>
          {movie.movie.overview.length > 53
            ? movie.movie.overview.substring(0, maxChar) + "..."
            : movie.movie.overview}
        </p>
        <div className="flex flex-row justify-between w-full">
          <span>16.99</span>
          <Tippy  content={isFavorite ? "remove from favorites":"add to favorites"} >
          <button type="button" className="cursor-pointer  "onClick={()=>dispatch(handleFavorites(movie.movie))}>
            {isFavorite ? <FaStar className="text-yellow-400 lg:text-2xl " /> : <FaRegStar  className="lg:text-2xl"/>}
            </button>
          </Tippy>
        </div>
        <Link
          to={`/movieDetails/${movie.id}`}
          className="bg-[#E50914] rounded px-2 py-1 lg:px-4 lg:py-2 lg:text-[20px] hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] transition-all duration-300 ease-in-out"
        >
          more details
        </Link>
      </div>
    </>
  );
};

export default Card;
