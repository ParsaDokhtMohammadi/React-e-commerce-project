import useWindowSize from "../hooks/useWindowSize";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import {
  useGetTrendingMoviesQuery,
  useGetMoviesByGenreQuery,
} from "../services/ProductsApiSlice";
import Card from "./Card";
import { useState } from "react";
const Home = () => {
  const screenWidth = useWindowSize();
  const navigate = useNavigate();
  const settings1 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const settings3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const [sliderSettings, setSliderSettings] = useState(settings2);
  useEffect(() => {
    if (screenWidth < 800) {
      setSliderSettings(settings3);
    } else {
      setSliderSettings(settings2);
    }
  }, [screenWidth]);
  const { data: SlideShowMovies } = useGetTrendingMoviesQuery();
  const { data: Actionmovies } = useGetMoviesByGenreQuery(28);
  const { data: HorrorMovies } = useGetMoviesByGenreQuery(27);
  const { data: animations } = useGetMoviesByGenreQuery(16);
  // const { data: AdventureMovies } = useGetMoviesByGenreQuery(12);
  // const { data: CrimeMovies } = useGetMoviesByGenreQuery(80);
  // const { data: ComedyMovies } = useGetMoviesByGenreQuery(35);
  // console.log(AdventureMovies);
  // console.log(CrimeMovies);
  // console.log(ComedyMovies?.results[12]);
  return (
    <>
      <div className="flex flex-row  p-8 items-center justify-evenly">
        <h2 className="text-white text-2xl font-bold mb-6">
          The Best Place to sit back relax Watch and Enjoy Movies
        </h2>
        <div className="w-3/4 md:w-3/4 lg:w-3/4 lg:h-[550px]">
          <Slider {...settings1}>
            {SlideShowMovies?.results.slice(0, 10).map((movie) => (
              <div key={movie.id} className="p-2 ">
                <div className="  lg:h-[550px] flex items-center justify-center rounded-lg shadow-lg">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className=" h-[350px] lg:h-[550px] w-full object-fill rounded-lg cursor-pointer"
                    onClick={() => navigate(`/movieDetails/${movie.id}`)}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
     
      <div className="flex flex-col px-8 gap-1.5 w-full">
        <Link to={`/category/${28}`} className="w-full  text-[24px]">
          action movies
        </Link>
        <div className="flex justify-center items-center gap-4">
          <div className="w-full overflow-hidden">
            <Slider {...sliderSettings}>
              {Actionmovies?.results.slice(0, 10).map((movie) => (
                <div key={movie.id} className="p-2 ">
                  <Card movie={movie}></Card>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden w-1/3 flex-col gap-3 justify-center items-center md:flex">
            <h2 className=" lg:text-[48px] md:text-[24px]  text-center">
              all the action that you need gathered in one place
            </h2>
            <Link
              to={`/category/${28}`}
              className="bg-[#E50914] text-center  rounded px-4 py-3 md:w-[175px] md:text-[24px] lg:text-[36px] lg:w-[250px]
                    hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] transition-all duration-300 ease-in-out"
            >
              more details
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 gap-1.5 w-full">
        <Link to={`/category/${27}`} className="w-full  text-[24px]">
          Horror movies
        </Link>
        <div className="flex justify-center items-center gap-4">
          <div className="w-full overflow-hidden">
            <Slider {...sliderSettings}>
              {HorrorMovies?.results.slice(0, 10).map((movie) => (
                <div key={movie.id} className="p-2 ">
                  <Card movie={movie}></Card>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden w-1/3 flex-col gap-3 justify-center items-center md:flex">
            <h2 className=" lg:text-[48px] md:text-[24px]  text-center">
              Dive into the world of horror where every thrill awaits.
            </h2>
            <Link
              to={`/category/${27}`}
              className="bg-[#E50914] text-center  rounded px-4 py-3 md:w-[175px] md:text-[24px] lg:text-[36px] lg:w-[250px]
                    hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] transition-all duration-300 ease-in-out"
            >
              more details
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 gap-1.5 w-full">
        <Link to={`/category/${16}`} className="w-full  text-[24px]">
          animations
        </Link>
        <div className="flex justify-center items-center gap-4">
          <div className="w-full overflow-hidden">
            <Slider {...sliderSettings}>
              {animations?.results.slice(0, 10).map((movie) => (
                <div key={movie.id} className="p-2 ">
                  <Card movie={movie}></Card>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden w-1/3 flex-col gap-3 justify-center items-center md:flex">
            <h2 className=" lg:text-[48px] md:text-[24px]  text-center">
              Experience the magic of animation where imagination comes to life.
            </h2>
            <Link
              to={`/category/${16}`}
              className="bg-[#E50914] text-center  rounded px-4 py-3 md:w-[175px] md:text-[24px] lg:text-[36px] lg:w-[250px]
                    hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] transition-all duration-300 ease-in-out"
            >
              more details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
