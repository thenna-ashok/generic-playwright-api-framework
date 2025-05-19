import { APIRequestContext } from "@playwright/test";
import { logger } from "../utils/logger";

class BaseAPI {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  /**
   * This method sends a GET request to the specified endpoint.
   * @param {string} endpoint - The API endpoint to send the GET request to.
   * @param {object} [params] - Optional query parameters to include in the request.
   * @param {object} [headers] - Optional headers to include in the request.
   * @returns {Promise<any>} - The response from the API.
   */
  public async get(endpoint: string) {
    logger.info(`GET request to ${endpoint}`);
    const response = await this.request.get(endpoint);
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Error: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }

  //Sends a POST request to the specified endpoint with the provided data.
  async post(endpoint: string, data: any) {
    logger.info(
      `POST request to ${endpoint} with data: ${JSON.stringify(data)}`
    );
    const response = await this.request.post(endpoint, { data });
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }

  //Sends a PUT request to the specified endpoint with the provided data.
  async put(endpoint: string, data?: any) {
    logger.info(
      `PUT request to ${endpoint} with data: ${JSON.stringify(data)}`
    );
    const response = await this.request.put(endpoint, data ? { data } : {});
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }

  //Sends a DELETE request to the specified endpoint.
  async delete(endpoint: string) {
    logger.info(`DELETE request to ${endpoint}`);
    const response = await this.request.delete(endpoint);
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }
}

export default BaseAPI;
