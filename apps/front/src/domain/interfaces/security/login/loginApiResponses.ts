export interface LoginResponse {
  id: number;
  idRol: number;
  token: string;
  userName?: string;
  email?: string;
  message: string;
  error: boolean;
}
export interface LoginRequest {
  email: string;
  password: string;
}
