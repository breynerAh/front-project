import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class GetAllCompanyApiRepository {
  static async getAllCompany(): Promise<CompanyResponse[]> {
    const response = await generalAxios().get<CompanyResponse[]>("/companies");
    return response;
  }
}
