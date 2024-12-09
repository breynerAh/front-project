import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class RefreshTokenApiRepository
 */
export class RefreshTokenApiRepository {
  /**
   * Post a RefreshToken
   * @param request - RefreshToken is required
   * @returns Promise<RefreshToken>
   */
  static async RefreshToken(request: string): Promise<{ token: string }> {
    const response = await generalAxios().get<{ token: string }>(
      `/login/refreshToken/${request}`
    );
    return response;
  }
}
