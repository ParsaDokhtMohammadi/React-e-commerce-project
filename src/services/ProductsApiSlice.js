import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
// get api key from tmbd website

export const productsApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: (page = 1) => `trending/movie/week?api_key=${API_KEY}&page=${page}`,
    }),
    searchMovie: builder.query({
      query: ({movie, page = 1}) =>
        `search/movie?api_key=${API_KEY}&query=${movie}&page=${page}`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=${API_KEY}`,
    }),
    getMoviesByGenre: builder.query({
      query: ({genreId, page = 1}) =>
        `discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`,
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
    }),
    getMovieCollection: builder.query({
      query: (collectionId) => `collection/${collectionId}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useSearchMovieQuery,
  useGetMovieDetailsQuery,
  useGetMoviesByGenreQuery,
  useGetGenresQuery,
  useGetMovieCollectionQuery
} = productsApiSlice;

export default productsApiSlice;
