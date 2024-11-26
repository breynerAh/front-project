import { RolResponse } from "@/domain/interfaces/security/rol/rolResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class RolRepository
 */
export class RolRepository {
  /**
   * Get all Rol
   * @param request - Rol is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async Rol(): Promise<RolResponse[]> {
    const response = await generalAxios().get<RolResponse[]>("/roles");
    return response;
  }
}
