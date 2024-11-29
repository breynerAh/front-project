import { EmailRecoveryPasswordApiRepository } from "@/infrastructure/repositories/recoveryPassword/emailRecoveryPasswordApi.repository";

/**
 * Post a emailRecoveryPassword
 * @param request - emailRecoveryPassword is required
 * @returns Promise<void>
 */
export async function postEmailRecoveryPassword(
  email: string
): Promise<string> {
  const emailRecoveryPasswordApiResponse =
    await EmailRecoveryPasswordApiRepository.emailRecoveryPassword(email);

  return emailRecoveryPasswordApiResponse;
}
