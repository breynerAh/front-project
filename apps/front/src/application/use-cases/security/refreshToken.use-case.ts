import { RefreshTokenApiRepository } from "@/infrastructure/repositories/security/refreshTokenApi.repository";

/**
 * Post a refreshToken
 * @param request - refreshToken is required
 * @returns Promise<Login>
 */
export async function getRefreshToken(
  request: string
): Promise<{ token: string }> {
  const loginApiResponse = await RefreshTokenApiRepository.RefreshToken(
    request
  );

  return loginApiResponse;
}
