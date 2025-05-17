import { UserAPI } from "../apis/userApi";
import ApiContext from "./apiContext";

export class ApiFactory {
  public static async getUserAPI(): Promise<UserAPI> {
    const request = await ApiContext.getInstance();
    return new UserAPI(request);
  }
}
