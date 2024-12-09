import { UserResponse } from "@/domain/interfaces/security/user/userResponse";
import { UserRepository } from "@/infrastructure/repositories/security/user.repository";

/**
 * User
 * @returns Promise<UserResponse>
 */
export async function GetByIdUser(id: number): Promise<UserResponse> {
  const response = await UserRepository.GetByIdUser(id);
  return response;
}
