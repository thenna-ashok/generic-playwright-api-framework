import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  use: {
    baseURL: "http://reqres.in",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  },
};

export default config;
