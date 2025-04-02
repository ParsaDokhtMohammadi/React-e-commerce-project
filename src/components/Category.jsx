import { useGetMoviesByGenreQuery } from "../services/ProductsApiSlice";
import { useNavigate, useParams , useSearchParams } from "react-router";
import Card from "./Card";
import Pagination from "./Pagination";
import LoadingScreen from "./LoadingScreen";

const Category = () => {
    const navigate = useNavigate()
    const page = useParams()
    const urlpage = Number(page.page)
    const [genreId] = useSearchParams()
    const query = genreId.get("query")

    
    
    const {data : movies  , isLoading} = useGetMoviesByGenreQuery({genreId:query , page:urlpage})
    const totalpage = movies?.total_pages
    const changePage = (newPage) => {
      navigate(`/category/${newPage}?query=${query}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    if (isLoading) {
      return <LoadingScreen></LoadingScreen>;
    } else {
      return (
        <>
          <div className="p-8 flex flex-col items-center">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(4,minmax(200px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))]  gap-6 min-h-[calc(100vh-329px)]">
              {movies?.results.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
            <Pagination totalpage={totalpage} page={urlpage} changePage={changePage}></Pagination>
          </div>
        </>
      );
    }
}

export default Category