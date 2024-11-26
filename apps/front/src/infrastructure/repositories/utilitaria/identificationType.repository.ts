import { IdentificationTypeResponse } from "@/domain/interfaces/utilitaria/identificationType/identificationTypeResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class IdentificationTypeRepository
 */
export class IdentificationTypeRepository {
  /**
   * Get all IdentificationType
   * @param request - IdentificationType is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async IdentificationType(): Promise<IdentificationTypeResponse[]> {
    const response = await generalAxios().get<IdentificationTypeResponse[]>(
      "/identificationTypes"
    );
    return response;
  }
}
