import { StateResponse } from "@/domain/interfaces/utilitaria/state";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class GenderRepository
 */
export class GenderRepository {
  /**
   * Get all Gender
   * @param request - Gender is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async Gender(): Promise<StateResponse[]> {
    const response = await generalAxios().get<StateResponse[]>("/genders");
    return response;
  }
}
