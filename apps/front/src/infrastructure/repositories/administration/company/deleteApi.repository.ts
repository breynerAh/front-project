import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class DeleteApiRepository {
  static async deleteCompany(request: {
    id: number;
    state: number;
  }): Promise<CompanyResponse> {
    const response = await generalAxios().put<
      CompanyResponse,
      {
        id: number;
        state: number;
      }
    >(`/companies/delete`, request);

    return response;
  }
}
