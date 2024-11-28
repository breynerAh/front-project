import { StateResponse } from "@/domain/interfaces/utilitaria/state";
import { GenderRepository } from "@/infrastructure/repositories/utilitaria/gender.repository copy";

/**
 * Rol
 * @returns Promise<StateResponse>
 */
export async function GetAllGender(): Promise<StateResponse[]> {
  const responde = await GenderRepository.Gender();
  return responde;
}
