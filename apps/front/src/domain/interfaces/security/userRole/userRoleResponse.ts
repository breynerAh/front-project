import { RolResponse } from "../rol/rolResponse";

export interface UserRoleRequest {
  idUser: number;
  idRole: number;
  assignDate: Date;
}

export interface UserRoleResponse {
  id: number;
  idUser: number;
  idRole: number;
  assignDate: Date;
  role: RolResponse
}
