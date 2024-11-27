import {
  UserRequest,
  UserResponse,
} from "@/domain/interfaces/security/user/userResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class UserRepository
 */
export class UserRepository {
  /**
   * Get all User
   * @param request - User is required
   * @returns Promise<UserResponse>
   */
  static async User(request: UserRequest): Promise<UserResponse> {
    const response = await generalAxios().post<UserResponse, UserRequest>(
      "/users",
      request
    );
    return response;
  }
}
