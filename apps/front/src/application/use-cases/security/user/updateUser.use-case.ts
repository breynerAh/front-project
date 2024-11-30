import {
  UpdateUserRequest,
  UserResponse,
} from "@/domain/interfaces/security/user/userResponse";
import { UserRepository } from "@/infrastructure/repositories/security/user.repository";

/**
 * User
 * @returns Promise<UserResponse>
 */
export async function UpdateUser(
  id: number,
  request: UpdateUserRequest
): Promise<UserResponse> {
  const response = await UserRepository.UpdateUser(id, request);
  return response;
}
