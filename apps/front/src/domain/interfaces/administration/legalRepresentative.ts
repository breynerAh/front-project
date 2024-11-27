export interface LegalRepresentativeRequest {
  idGender?: number;
  idCity?: number;
  idIdentificationType?: number;
  identificationNumber?: number;
  name?: string;
  middleName?: string;
  firstSurname?: string;
  secondSurname?: string;
  email?: string;
  phone?: string;
  fullAddress?: string;
  state?: boolean;
}

export interface LegalRepresentativeResponse {
  id: number;
  idGender?: number;
  idCity?: number;
  idIdentificationType?: number;
  identificationNumber?: number;
  name?: string;
  middleName?: string;
  firstSurname?: string;
  secondSurname?: string;
  email?: string;
  phone?: string;
  fullAddress?: string;
  state?: boolean;
}
