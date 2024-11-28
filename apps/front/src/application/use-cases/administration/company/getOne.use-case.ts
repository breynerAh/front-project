import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { GetOneApiRepository } from "@/infrastructure/repositories/administration/company/getOneApi.repository";

/**
 * Company
 * @returns Promise<CompanyResponse>
 */
export async function getOneCompany(id: number): Promise<CompanyResponse> {
  const response = await GetOneApiRepository.getOneCompany(id);
  return response;
}
