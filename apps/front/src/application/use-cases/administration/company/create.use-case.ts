import {
  CompanyRequest,
  CompanyResponse,
} from "@/domain/interfaces/administration/company";
import { CreateCompanyApiRepository } from "@/infrastructure/repositories/administration/company/createApi.repository";

/**
 * Company
 * @returns Promise<CompanyResponse>
 */
export async function postCreateCompany(
  request: CompanyRequest
): Promise<CompanyResponse> {
  const responde = await CreateCompanyApiRepository.createCompany(request);
  return responde;
}
