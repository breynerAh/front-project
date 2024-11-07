export interface LoginResponse {
  token: string;
  message: string;
  error: boolean;
}
export interface LoginRequest {
  email: string;
  password: string;
}
