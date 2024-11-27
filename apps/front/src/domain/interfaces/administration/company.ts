import { LegalRepresentativeRequest } from "@/domain/interfaces/administration/legalRepresentative";

export interface CompanyRequest {
  idState?: number;
  idIdentificationType?: number;
  identificationNumber?: number;
  dv?: string;
  business_name?: string;
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
  dv: string;
  business_name: string;
  name: string;
  middleName: string;
  firstSurname: string;
  secondSurname: string;
  fullName: string;
  email: string;
  phone: string;
  fullAddress: string;
}