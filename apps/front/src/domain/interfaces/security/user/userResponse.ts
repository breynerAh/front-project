import {
  PersonRequest,
  PersonResponse,
  UpdatePersonRequest,
} from "../../administration/person/personResponse";
import { UserRoleResponse } from "../userRole/userRoleResponse";

export interface UserRequest extends PersonRequest {
  userName: string;
  email: string;
  password?: string;
  idCompany: number;
  idRol: number;
}

export interface UpdateUserRequest extends UpdatePersonRequest {
  userName?: string;
  email?: string;
  password?: string;
  idCompany?: number;
  idRol?: number;
}

export interface UserResponse {
  id: number;
  userName: string;
  email: string;
  password: string;
  idCompany: number;
  failedAttempts: number;
  state: string;
  persons: PersonResponse;
  userRole: UserRoleResponse[];
}
