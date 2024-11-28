import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class GetOneApiRepository {
  static async getOneCompany(id: number): Promise<CompanyResponse> {
    const response = await generalAxios().get<CompanyResponse>(
      `/companies/${id}`
    );
    return response;
  }
}
