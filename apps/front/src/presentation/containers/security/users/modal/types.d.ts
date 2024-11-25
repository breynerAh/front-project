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
};
