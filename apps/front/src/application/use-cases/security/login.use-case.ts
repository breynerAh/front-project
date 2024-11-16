import {
  LoginRequest,
  LoginResponse,
} from "@/domain/interfaces/security/login/loginApiResponses";
import { LoginApiRepository } from "@/infrastructure/repositories/security/loginApi.repository";

/**
 * Login
 * @returns Promise<LoginResponse>
 */
export async function Login(request: LoginRequest): Promise<LoginResponse> {
  const responde = await LoginApiRepository.Login(request);
  return responde;
}
