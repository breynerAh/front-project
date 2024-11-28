import { PersonRequest } from "../../administration/person/personResponse";

export interface UserRequest extends PersonRequest {
  userName: string;
  email: string;
  password?: string;
  idCompany: number;
  idRol: number;
}

export interface UserResponse {
  userName: string;
  email: string;
  password: string;
  idCompany: number;
  failedAttempts: number;
  state: boolean;
}
