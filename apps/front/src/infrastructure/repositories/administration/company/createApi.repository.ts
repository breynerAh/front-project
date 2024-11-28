import {
  CompanyRequest,
  CompanyResponse,
} from "@/domain/interfaces/administration/company";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class CreateCompanyApiRepository {
  static async createCompany(
    request: CompanyRequest
  ): Promise<CompanyResponse> {
    const response = await generalAxios().post<CompanyResponse, CompanyRequest>(
      "/companies",
      request
    );
    return response;
  }
}
