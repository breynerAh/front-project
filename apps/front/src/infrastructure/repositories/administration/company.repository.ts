import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class CompanyRepository
 */
export class CompanyRepository {
  /**
   * Get all Company
   * @param request - Company is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async Company(): Promise<CompanyResponse[]> {
    const response = await generalAxios().get<CompanyResponse[]>("/companies");
    return response;
  }
}
