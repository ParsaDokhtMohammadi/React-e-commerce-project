import SimilarCard from "./SimilarCard";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa6";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetMovieDetailsQuery,
  useGetMoviesByGenreQuery,
} from "../services/ProductsApiSlice";
import {
  handleFavoritesButtonRender,
  handleFavorites,
  handleCart,
  handleCartButtonRender,
} from "../features/MovieSlice";
import LoadingScreen from "./LoadingScreen";
const Moviedetails = () => {
  const id = useParams();
  const { data: movieDetails, isLoading } = useGetMovieDetailsQuery(id.id);
  const runtime = movieDetails?.runtime;
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    handleFavoritesButtonRender(state, movieDetails?.id)
  );
  const isInCart = useSelector((state) => handleCartButtonRender(state, movieDetails?.id));
  const { data: similarMovies, isLoading: GenreLoading } =
    useGetMoviesByGenreQuery(movieDetails?.genres[0].id);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const settingsLg = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const settingsS = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const screenWidth = useWindowSize();
  const [sliderSettings, setSliderSettings] = useState(settings);
  useEffect(() => {
    if (screenWidth < 1200 && screenWidth > 800) {
      setSliderSettings(settings);
    } else if (screenWidth < 800) {
      setSliderSettings(settingsS);
    } else {
      setSliderSettings(settingsLg);
    }
  }, [screenWidth]);
  const clockedRuntime = (time) => {
    var hours = parseInt(time / 60);
    var mins = time - hours * 60;
    return `${hours}h ${mins}min`;
  };

  if (isLoading || GenreLoading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <div className="p-8 flex flex-col">
        <div className=" gap-3 flex flex-row md:gap-12">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
            className="max-w-[200px] md:max-w-[300px] rounded lg:max-w-[500px] max-h-[600px]"
          />
          <div className="flex flex-col md:p-6 gap-2.5 w-full">
            <h2 className="text-[18px] md:text-3xl">{movieDetails?.title}</h2>
            <h2 className="text-[#F5C518]">{movieDetails?.tagline}</h2>
            <ul className="flex gap-2.5 text-[#B3B3B3] flex-wrap">
              {movieDetails?.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <span className="text-[#B3B3B3]">{movieDetails?.release_date}</span>
            <ul className="list-none text-[#B3B3B3]">
              <li>budget {movieDetails?.budget.toLocaleString()}</li>
              <li>revenue {movieDetails?.revenue.toLocaleString()}</li>
              <li>runtime {clockedRuntime(runtime)}</li>
              <li className="block">
                <ul className="flex gap-1.5 flex-wrap">
                  {movieDetails?.production_companies.map((company) => (
                    <li key={company.id}>{company.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <p>{movieDetails?.overview}</p>
            <span>price 16.99$</span>
            <div className="flex gap-2.5">
              <button
                onClick={() => dispatch(handleCart(movieDetails))}
                className="flex items-center gap-2.5 p-2  rounded-xl bg-[#27AE60] cursor-pointer relative 
              hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] hover:bottom-1 transition-all  duration-300 ease-in-out"
              >
                {isInCart ? (
                  <span className="hidden md:block">remove from cart</span>
                ) : (
                  <span className="hidden md:block">add to cart</span>
                )}
                <FaCartPlus />
              </button>
              <button
                type="button"
                onClick={() => dispatch(handleFavorites(movieDetails))}
                className="flex items-center gap-2.5 p-2  rounded-xl bg-[#F5C518]  cursor-pointer relative 
              hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] hover:bottom-1 transition-all  duration-300 ease-in-out"
              >
                {isFavorite ? (
                  <span className="hidden md:block">remove from favorites</span>
                ) : (
                  <span className="hidden md:block">add to favorites</span>
                )}
                {isFavorite ? <FaStar /> : <FaRegStar />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 ">
          <h1 className="text-2xl">other similar movies</h1>
          <div>
            <Slider {...sliderSettings}>
              {similarMovies?.results.slice(10, 20).map((movie) => (
                <div key={movie.id} className="p-2">
                  <SimilarCard movie={movie}></SimilarCard>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
};

export default Moviedetails;
