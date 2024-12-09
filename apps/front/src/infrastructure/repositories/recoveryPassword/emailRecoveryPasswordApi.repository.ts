import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class EmailRecoveryPasswordApiRepository
 */
export class EmailRecoveryPasswordApiRepository {
  /**
   * Post a emailRecoveryPassword
   * @param request - emailRecoveryPassword is required
   * @returns Promise<void>
   */
  static async emailRecoveryPassword(email: string): Promise<string> {
    const response = await generalAxios().post<string, object>(
      `/recoveryPassword/sendEmail/${email}`,
      {}
    );
    return response;
  }
}
