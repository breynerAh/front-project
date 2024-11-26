import { CargoResponse } from "@/domain/interfaces/utilitaria/cargo/cargoResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class CargoRepository
 */
export class CargoRepository {
  /**
   * Get all Cargo
   * @param request - Cargo is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async Cargo(): Promise<CargoResponse[]> {
    const response = await generalAxios().get<CargoResponse[]>("/cargos");
    return response;
  }
}
