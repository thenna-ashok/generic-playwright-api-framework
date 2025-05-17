import { test, expect } from "@playwright/test";
import { ApiFactory } from "../utils/apiFactory";
import { logger } from "../utils/logger";
import { UserAPI } from "../apis/userApi";

test.describe("User API Tests", () => {
  let userAPI: UserAPI;

  test.beforeAll(async (playwright) => {
    userAPI = await ApiFactory.getUserAPI();
  });

  test("Get User details with given userId", async () => {
    const userId = 2;
    const response = await userAPI.getUser(userId);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(userId);
    logger.info(`User details received for ID: ${userId}`);
  });
});
