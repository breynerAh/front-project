import { CompanyPersonResponse } from "@/domain/interfaces/administration/companyPerson/companyPersonResponse";
import {
  PersonRequest,
  PersonResponse,
  UpdatePersonRequest,
} from "../../administration/person/personResponse";
import { UserRoleResponse } from "../userRole/userRoleResponse";
import { UploadRequest } from "../../utilitaria/upload/upload.response";

export interface UserRequest extends PersonRequest {
  userName: string;
  email: string;
  password?: string;
  idCompany: number;
  idRol: number;
}

export interface UpdateUserRequest extends UpdatePersonRequest {
  id?: number,
  userName?: string;
  email?: string;
  password?: string;
  idCompany?: number;
  idRol?: number;
  upload?: UploadRequest
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
  companyPerson: CompanyPersonResponse;
}
