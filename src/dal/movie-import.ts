import logger from "../logging/index.js";
import httpRequest from "../service/httpClient/axios.js";
import requests from "../service/requestUrl.js";

/**
 * Class fo movie import
 */
export default class MovieImport {
  constructor() {}

  async start() {
    try {
      const response = await httpRequest.fetch(requests.fetchTrending);
      logger.log(response.data);
    } catch (error) {
      logger.error(error);
    }
  }
}
