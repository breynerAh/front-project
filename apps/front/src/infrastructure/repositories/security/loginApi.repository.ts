import {
  LoginRequest,
  LoginResponse,
} from "@/domain/interfaces/security/login/loginApiResponses";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class LoginApiRepository
 */
export class LoginApiRepository {
  /**
   * Post a Login
   * @param request - Login is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async Login(request: LoginRequest): Promise<LoginResponse> {
    const response = await generalAxios().post<LoginResponse, LoginRequest>(
      "/login",
      request
    );
    return response;
  }
}
