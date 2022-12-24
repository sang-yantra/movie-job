import { API_KEY } from "../constants/index.js";

export const DISCOVER = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
};

export const TRENDING = {
  fetchAllTrendingWeek: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchAllTrendingDay: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
};
