import logger from "../logging/index.js";
import httpRequest from "../service/httpClient/axios.js";
import { IMovie } from "../service/models/movie.js";
import { DISCOVER, TRENDING } from "../service/requestUrl.js";
import { MOVIE, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/**
 * Class fo movie import
 */
export default class MovieImport {
  movies: IMovie[] | undefined;
  constructor() {}

  async start() {
    await httpRequest
      .fetch(TRENDING.fetchAllTrendingWeek)
      .then((response) => {
        this.movies = response.data.results;
      })
      .catch((error) => {
        logger.error(error);
      });
    await this.insertMovies(this.movies);
  }

  async insertMovies(movies?: IMovie[]) {
    if (!movies) return;
    const firstMovie = movies[0];
    const currentDate = this.getCurrentDate();
    const getAllDbMovies = await prisma.mOVIE.findMany();
    if (getAllDbMovies.length > 0) {
      movies = movies.filter(
        (movie) =>
          movie.media_type === "movie" &&
          getAllDbMovies.some(({ id }) => movie.id === id)
      );
    } else {
      movies = movies.filter((movie) => movie.media_type === "movie");
    }
    const moviesToInsert = movies.map((movie) => {
      const dbMovie: MOVIE = {
        id: movie.id,
        title: movie.title,
        original_language: movie.original_language,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        media_type: movie.media_type,
        created_by_: "JOB_LOAD",
        updated_by: "JOB_LOAD",
        overview: movie.overview,
        popularity: 0,
        vote_average: 0,
        vote_count: 0,
        release_date: null,
        created_at: null,
        updated_at: null,
      };
      return dbMovie;
    });
    const dbMovies = await prisma.mOVIE.createMany({
      data: [...moviesToInsert],
    });
    console.log("dbmovies", dbMovies);
  }

  getCurrentDate() {
    const date = new Date();

    // Get year, month, and day part from the date
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    const formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }
}
