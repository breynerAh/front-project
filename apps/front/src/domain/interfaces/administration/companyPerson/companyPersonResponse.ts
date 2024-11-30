import { CompanyResponse } from "../company";

export interface CompanyPersonRequest {
  idCompany: number;
  idPerson: number;
}

export interface CompanyPersonResponse {
  id: number;
  idCompany: number;
  idPerson: number;
  company: CompanyResponse;
}
