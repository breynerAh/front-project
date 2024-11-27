import { TypeCompanyResponse } from "@/domain/interfaces/utilitaria/typeCompany/typeCompanyResponse";
import { TypeCompanyRepository } from "@/infrastructure/repositories/utilitaria/typeCompany.repository";

/**
 * TypeCompany
 * @returns Promise<TypeCompanyResponse>
 */
export async function TetAllTypeCompany(): Promise<TypeCompanyResponse[]> {
  const responde = await TypeCompanyRepository.TypeCompany();
  return responde;
}
