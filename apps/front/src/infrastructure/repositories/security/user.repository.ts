import {
  UpdateUserRequest,
  UserRequest,
  UserResponse,
} from "@/domain/interfaces/security/user/userResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class UserRepository
 */
export class UserRepository {
  /**
   * Post User
   * @param request - User is required
   * @returns Promise<UserResponse>
   */
  static async CreateUser(request: UserRequest): Promise<UserResponse> {
    const response = await generalAxios().post<UserResponse, UserRequest>(
      "/users",
      request
    );
    return response;
  }

  /**
   * Get all User
   * @returns Promise<RolResponse>
   */
  static async GetAllUser(): Promise<UserResponse[]> {
    const response = await generalAxios().get<UserResponse[]>("/users");
    return response;
  }

  /**
   * Get by id User
   * @returns Promise<RolResponse>
   */
  static async GetByIdUser(id: number): Promise<UserResponse> {
    const response = await generalAxios().get<UserResponse>(`/users/${id}`);
    return response;
  }

  /**
   * Put User
   * @returns Promise<RolResponse>
   */
  static async UpdateUser(
    id: number,
    request: UpdateUserRequest
  ): Promise<UserResponse> {
    const response = await generalAxios().put<UserResponse, UpdateUserRequest>(
      `/users/${id}`,
      request
    );
    return response;
  }
}
