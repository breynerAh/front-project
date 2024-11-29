import {
  CompanyRequest,
  CompanyResponse,
} from "@/domain/interfaces/administration/company";
import { UpdateCompanyApiRepository } from "@/infrastructure/repositories/administration/company/updateApi.repository";

export async function updateCompany(
  request: CompanyRequest,
  id: number
): Promise<CompanyResponse> {
  console.log(id, "👻👻👻👻👻👻");
  const response = await UpdateCompanyApiRepository.updateCompany(request, id);
  return response;
}
