import { UserResponse } from "@/domain/interfaces/security/user/userResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class RecoveryPasswordApiRepository
 */
export class RecoveryPasswordApiRepository {
  /**
   * Post a RecoveryPassword
   * @param request - RecoveryPassword is required
   * @returns Promise<UserResponse>
   */
  static async recoveryPassword(
    token: string,
    request: { id: number; password: string }
  ): Promise<UserResponse> {
    const response = await generalAxios().post<
      UserResponse,
      { id: number; password: string }
    >("/recoveryPassword", request, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}
