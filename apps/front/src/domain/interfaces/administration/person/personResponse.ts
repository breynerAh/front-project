import { CargoResponse } from "../../utilitaria/cargo/cargoResponse";
import { IdentificationTypeResponse } from "../../utilitaria/identificationType/identificationTypeResponse";
import { CompanyPersonResponse } from "../companyPerson/companyPersonResponse";

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

export interface UpdatePersonRequest {
  idIdentificationType?: number;
  idCargo?: number;
  idUser?: number;
  documentNumber?: string;
  firstName?: string;
  middleName?: string | undefined;
  firstLastName?: string;
  middleLastName?: string | undefined;
  dateBirth?: Date;
  phone?: string;
  email?: string;
}

export interface PersonResponse {
  id: number;
  idIdentificationType: number;
  idCargo: number;
  idUser: number;
  documentNumber: string;
  firstName: string;
  middleName: string;
  firstLastName: string;
  middleLastName: string;
  fullName: string;
  dateBirth: Date;
  phone: string;
  email: string;
  state: boolean;
  companyPerson: CompanyPersonResponse[];
  identificationType: IdentificationTypeResponse;
  cargo: CargoResponse;
}
