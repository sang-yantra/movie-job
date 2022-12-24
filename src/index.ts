/// This is a job to fetch api data from weather api and send regular alerts
import logger from "./logging/index.js";
import { VERSION } from "./constants/index.js";
import MovieImport from "./dal/movie-import.js";

async function main() {
  try {
    logger.info("Console job started.");
    const movieImport = new MovieImport();
    await movieImport.start();
    logger.info("Console job completed.");
  } catch (error) {
    logger.error(error);
  }
}

await main();
