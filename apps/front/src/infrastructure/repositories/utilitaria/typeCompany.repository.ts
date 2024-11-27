import { TypeCompanyResponse } from "@/domain/interfaces/utilitaria/typeCompany/typeCompanyResponse";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

/**
 * @class TypeCompanyRepository
 */
export class TypeCompanyRepository {
  /**
   * Get all TypeCompany
   * @param request - TypeCompany is required
   * @returns Promise<ConsecutivoResponse>
   */
  static async TypeCompany(): Promise<TypeCompanyResponse[]> {
    const response = await generalAxios().get<TypeCompanyResponse[]>(
      "/TypeCompanies"
    );
    return response;
  }
}
