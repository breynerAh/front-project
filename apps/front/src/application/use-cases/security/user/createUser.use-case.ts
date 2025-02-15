import {
  UserRequest,
  UserResponse,
} from "@/domain/interfaces/security/user/userResponse";
import { UserRepository } from "@/infrastructure/repositories/security/user.repository";

/**
 * User
 * @returns Promise<UserResponse>
 */
export async function CreateUser(request: UserRequest): Promise<UserResponse> {
  const response = await UserRepository.CreateUser(request);
  return response;
}
