import BaseAPI from "./baseAPI";

export class UserAPI extends BaseAPI {
  async getUser(userId: number) {
    return this.get(`/api/users/${userId}`);
  }
}
