import { test, expect } from "@playwright/test";
import { ApiFactory } from "../utils/apiFactory";
import { logger } from "../utils/logger";
import { UserAPI } from "../apis/userApi";

// Add global variable
const userId = 2;

test.describe("User API Tests", () => {
  let userAPI: UserAPI;

  test.beforeAll(async (playwright) => {
    userAPI = await ApiFactory.getUserAPI();
  });

  //Get user details with given userId
  test("Get User details with given userId", async () => {
    const response = await userAPI.getUser(userId);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(userId);
    logger.info(`User details received for ID: ${userId}`);
  });

  //Create a new user
  test("Should update a user with given userId", async () => {
    const userData = { name: "Jane Doe", job: "Product Manager" };
    const response = await userAPI.updateUser(userId.toString(), userData);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.updatedAt).not.toBeNull();
    logger.info(
      `User updated with ID: ${userId} and values: ${JSON.stringify(
        responseBody
      )}`
    );
  });

  //Delete the user
  test("Should delete a user with given userId", async () => {
    const response = await userAPI.deleteUser(userId.toString());
    expect(response.status()).toBe(204);
    logger.info(`User deleted with ID: ${userId}`);
  });

  //List users
  test("Should list users", async () => {
    const page = 2;
    const response = await userAPI.listUsers(page);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.page).toBe(page);
    logger.info(`Users listed for page: ${page}`);
  });
});
