import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card"
const Favorites = () => {
  const favoriteMovies = useSelector((state) => state.Movies.favorites);

  if (favoriteMovies.length == 0) {
    
    return <div className="h-[calc(100vh-329px)]"><h2>you have no favorite movies</h2></div>;
  } else {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(4,minmax(200px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))]  gap-6 p-8 min-h-[calc(100vh-329px)]">
          {favoriteMovies.map(movie=>
            <Card movie={movie}></Card>
          )}
      </div>
    );
  }
};

export default Favorites;
