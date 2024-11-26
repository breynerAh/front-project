import { CompanyResponse } from "@/domain/interfaces/administration/company/companyResponse";
import { CompanyRepository } from "@/infrastructure/repositories/administration/company.repository";

/**
 * Company
 * @returns Promise<CompanyResponse>
 */
export async function GetAllCompany(): Promise<CompanyResponse[]> {
  const responde = await CompanyRepository.Company();
  return responde;
}
