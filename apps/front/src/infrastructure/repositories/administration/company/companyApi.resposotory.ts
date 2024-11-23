import { CompanyResponse } from "@/domain/interfaces/administration/company/companyApi";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class GetAllCompanyApiRepository {
  static async getAllCompany() {
    const response = await generalAxios().get<CompanyResponse[]>("/companies");
    return response;
  }
}
