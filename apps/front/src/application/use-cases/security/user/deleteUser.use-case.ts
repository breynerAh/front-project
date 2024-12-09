import { UserResponse } from "@/domain/interfaces/security/user/userResponse";
import { UserRepository } from "@/infrastructure/repositories/security/user.repository";

/**
 * User
 * @returns Promise<UserResponse>
 */
export async function deleteUser(request: {
  id: number;
  state: boolean;
}): Promise<UserResponse> {
  const response = await UserRepository.DeleteUser(request);
  return response;
}
