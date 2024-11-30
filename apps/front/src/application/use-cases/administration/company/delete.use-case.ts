import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { DeleteApiRepository } from "@/infrastructure/repositories/administration/company/deleteApi.repository";

/**
 * Company
 * @returns Promise<CompanyResponse>
 */
export async function deleteCompany(request: {
  id: number;
  state: number;
}): Promise<CompanyResponse> {
  const response = await DeleteApiRepository.deleteCompany(request);
  return response;
}
