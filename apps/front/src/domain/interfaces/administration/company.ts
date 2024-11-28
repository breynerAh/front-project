import {
  LegalRepresentativeRequest,
  LegalRepresentativeResponse,
} from "@/domain/interfaces/administration/legalRepresentative";
import { IdentificationTypeResponse } from "@/domain/interfaces/utilitaria/identificationType/identificationTypeResponse";
import { StateResponse } from "@/domain/interfaces/utilitaria/state";
import { TypeCompanyResponse } from "@/domain/interfaces/utilitaria/typeCompany/typeCompanyResponse";

export interface CompanyRequest {
  id?: number;
  idState?: number;
  idIdentificationType?: number;
  identificationNumber?: number;
  dv?: string;
  businessName?: string;
  name?: string;
  middleName?: string;
  firstSurname?: string;
  secondSurname?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  fullAddress?: string;
  legalRepresentative?: LegalRepresentativeRequest;
}

export interface CompanyResponse {
  id: number;
  idState: number;
  idIdentificationType: number;
  identificationNumber: number;
  idTypeCompany: number;
  dv: string;
  businessName: string;
  companyName: string;
  webPage: string;
  name: string;
  middleName: string;
  firstSurname: string;
  secondSurname: string;
  fullName: string;
  email: string;
  phone: string;
  fullAddress: string;
  state?: StateResponse;
  typeCompany?: TypeCompanyResponse;
  identificationType?: IdentificationTypeResponse;
  legalRepresentative?: LegalRepresentativeResponse;
}
export interface CompanyMapResponse {
  id: number;
  idState: number;
  idIdentificationType: number;
  identificationNumber: number;
  idTypeCompany: number;
  dv: string;
  businessName: string;
  companyName: string;
  webPage: string;
  name: string;
  middleName: string;
  firstSurname: string;
  secondSurname: string;
  fullName: string;
  email: string;
  phone: string;
  fullAddress: string;
  typeCompany?: string;
  identificationType?: string;
  state?: string;
}
