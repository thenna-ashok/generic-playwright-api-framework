import { request, APIRequestContext } from "@playwright/test";
import config from "../playwright.config";

class ApiContext {
  private static instance: APIRequestContext;

  private constructor() {}
  /**
   * This method returns a singleton instance of APIRequestContext.
   * It creates a new instance if it doesn't exist, otherwise returns the existing one.
   * @returns {Promise<APIRequestContext>} - The singleton instance of APIRequestContext.
   */
  public static async getInstance(): Promise<APIRequestContext> {
    if (!ApiContext.instance) {
      ApiContext.instance = await request.newContext({
        baseURL: config.use?.baseURL,
        extraHTTPHeaders: config.use?.extraHTTPHeaders,
      });
    }
    return ApiContext.instance;
  }
}
export default ApiContext;
