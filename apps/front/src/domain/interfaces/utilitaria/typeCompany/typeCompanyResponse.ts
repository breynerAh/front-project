export interface TypeCompanyRequest {
  name: string;
  acronym: string;
  code: string;
}

export interface TypeCompanyResponse {
  id: number;
  name: string;
  description: string;
}
