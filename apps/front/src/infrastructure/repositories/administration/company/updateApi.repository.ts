import {
  CompanyRequest,
  CompanyResponse,
} from "@/domain/interfaces/administration/company";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class UpdateCompanyApiRepository {
  static async updateCompany(
    request: CompanyRequest,
    id: number
  ): Promise<CompanyResponse> {
    const response = await generalAxios().put<CompanyResponse, CompanyRequest>(
      `/companies/${id}`,
      request
    );
    return response;
  }
}
