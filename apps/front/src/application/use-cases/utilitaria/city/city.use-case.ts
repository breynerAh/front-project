import { StateResponse } from "@/domain/interfaces/utilitaria/state";
import { CityRepository } from "@/infrastructure/repositories/utilitaria/city.repository";

/**
 * Rol
 * @returns Promise<StateResponse>
 */
export async function GetAllCity(): Promise<StateResponse[]> {
  const responde = await CityRepository.City();
  return responde;
}
