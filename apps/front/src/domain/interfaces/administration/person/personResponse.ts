export interface PersonRequest {
  idIdentificationType: number;
  idCargo: number;
  idUser?: number;
  documentNumber: string;
  firstName: string;
  middleName: string | undefined;
  firstLastName: string;
  middleLastName: string | undefined;
  dateBirth: Date;
  phone: string;
  email: string;
}

export interface PersonResponse {
  idIdentificationType: number;
  idCargo: number;
  idUser: number;
  documentNumber: string;
  firstName: string;
  middleName: string;
  firstLastName: string;
  middleLastName: string;
  dateBirth: Date;
  phone: string;
  email: string;
}
