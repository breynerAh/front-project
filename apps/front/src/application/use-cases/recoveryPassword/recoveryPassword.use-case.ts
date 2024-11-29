import { UserResponse } from "@/domain/interfaces/security/user/userResponse";
import { RecoveryPasswordApiRepository } from "@/infrastructure/repositories/recoveryPassword/recoveryPasswordApi";

/**
 * Post a recoveryPassword
 * @param request - recoveryPassword is required
 * @returns Promise<void>
 */
export async function postRecoveryPassword(
  token: string,
  request: { id: number; password: string }
): Promise<UserResponse> {
  const recoveryPasswordApiResponse =
    await RecoveryPasswordApiRepository.recoveryPassword(token, request);

  return recoveryPasswordApiResponse;
}
