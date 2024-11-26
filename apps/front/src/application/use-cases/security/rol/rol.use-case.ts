import { RolResponse } from "@/domain/interfaces/security/rol/rolResponse";
import { RolRepository } from "@/infrastructure/repositories/security/rol.repository";

/**
 * Rol
 * @returns Promise<RolResponse>
 */
export async function GetAllRol(): Promise<RolResponse[]> {
  const responde = await RolRepository.Rol();
  return responde;
}
