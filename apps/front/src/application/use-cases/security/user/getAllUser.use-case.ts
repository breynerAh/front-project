import { capitalizedFirst } from "@/common/utils";
import { UserResponse } from "@/domain/interfaces/security/user/userResponse";
import { UserRepository } from "@/infrastructure/repositories/security/user.repository";

/**
 * User
 * @returns Promise<UserResponse>
 */
export async function GetAllUser(): Promise<UserResponse[]> {
  const response = (await UserRepository.GetAllUser())?.map((x) => ({
    ...x,
    identificationType: capitalizedFirst(x?.persons?.identificationType?.name),
    document: x?.persons?.documentNumber,
    fullName: capitalizedFirst(x?.persons?.fullName),
    position: capitalizedFirst(x?.persons?.cargo?.name),
    rol: x?.userRole?.map((rol) => capitalizedFirst(rol?.role?.name)),
    state: x?.state ? "Activo" : "Inactivo",
  }));
  return response;
}
