import { CompanyResponse } from "@/domain/interfaces/administration/company";
import { RolResponse } from "@/domain/interfaces/security/rol/rolResponse";
import { CargoResponse } from "@/domain/interfaces/utilitaria/cargo/cargoResponse";
import { IdentificationTypeResponse } from "@/domain/interfaces/utilitaria/identificationType/identificationTypeResponse";

type CreateUser = {
  idIdentificationType: 0;
  documentNumber: "";
  name: "";
  firstSurname: "";
  dateBirth: "";
  email: "";
  phone: "";
  userName: "";
  idCargo: 0;
  idRol: 0;
  idEmpresa: 0;
};

export type TUser = {
  control: Control<CreateUser>;
  errors: FieldErrors<CreateUser>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  theme;
  dataGetAllCompany?: CompanyResponse[];
  dataGetAllRol?: RolResponse[];
  dataGetAllCargo?: CargoResponse[];
  dataGetAllIdentificationType?: IdentificationTypeResponse[];
};
