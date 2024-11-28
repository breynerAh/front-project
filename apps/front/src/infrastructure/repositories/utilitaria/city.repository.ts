import { StateResponse } from "@/domain/interfaces/utilitaria/state";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class CityRepository
 */
export class CityRepository {
  /**
   * Get all City
   * @param request - City is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async City(): Promise<StateResponse[]> {
    const response = await generalAxios().get<StateResponse[]>("/cities");
    return response;
  }
}
