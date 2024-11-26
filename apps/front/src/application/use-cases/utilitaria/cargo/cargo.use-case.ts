import { CargoResponse } from "@/domain/interfaces/utilitaria/cargo/cargoResponse";
import { CargoRepository } from "@/infrastructure/repositories/utilitaria/cargo.repository";

/**
 * Rol
 * @returns Promise<CargoResponse>
 */
export async function GetAllCargo(): Promise<CargoResponse[]> {
  const responde = await CargoRepository.Cargo();
  return responde;
}
