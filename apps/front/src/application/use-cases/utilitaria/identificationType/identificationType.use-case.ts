import { IdentificationTypeResponse } from "@/domain/interfaces/utilitaria/identificationType/identificationTypeResponse";
import { IdentificationTypeRepository } from "@/infrastructure/repositories/utilitaria/identificationType.repository";

/**
 * IdentificationType
 * @returns Promise<IdentificationTypeResponse>
 */
export async function GetAllIdentificationType(): Promise<
  IdentificationTypeResponse[]
> {
  const responde = await IdentificationTypeRepository.IdentificationType();
  return responde;
}
