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
  try {
    const responde = await LoginApiRepository.Login(request);

    return responde;
  } catch (error) {
    throw new Error("Error fetching login: " + error);
  }
}
