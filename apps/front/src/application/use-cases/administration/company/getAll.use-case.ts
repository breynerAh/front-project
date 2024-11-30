import { CompanyMapResponse } from "@/domain/interfaces/administration/company";
import { GetAllCompanyApiRepository } from "@/infrastructure/repositories/administration/company/getAllApi.repository";

/**
 * Company
 * @returns Promise<CompanyResponse>
 */
export async function getAllCompany(): Promise<CompanyMapResponse[]> {
  const response = (await GetAllCompanyApiRepository.getAllCompany())?.map(
    (x) => ({
      ...x,
      identificationType: x?.identificationType?.name,
      typeCompany: x?.typeCompany?.name,
      state: x.state?.name,
    })
  );

  return response;
}
