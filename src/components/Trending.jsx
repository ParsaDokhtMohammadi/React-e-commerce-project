import { useGetTrendingMoviesQuery } from "../services/ProductsApiSlice";
import { useNavigate, useParams } from "react-router";
import Card from "./Card";
import Pagination from "./Pagination";
import LoadingScreen from "./LoadingScreen";

const Trending = () => {
  const navigate = useNavigate();
  const { page: urlPage } = useParams();
  const page = Number(urlPage) || 1;
  const { data: trending, isLoading } = useGetTrendingMoviesQuery(page);
  const totalpage = trending?.total_pages;
  if (isLoading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <>
        <div className="p-8 flex flex-col items-center">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(4,minmax(200px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))]  gap-6 min-h-[calc(100vh-329px)]">
            {trending?.results.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination totalpage={totalpage} page={page}></Pagination>
        </div>
      </>
    );
  }
};

export default Trending;
