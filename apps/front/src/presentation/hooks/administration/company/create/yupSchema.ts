import { validator } from "@/common/utils";
import { regex } from "@/presentation/shared/utils";

/**
 * Schema
 */
export const schema = validator.object().shape({
  idIdentificationType: validator
    .number()
    .when("idTypeCompany", (idTypeCompany: number[], schema) => {
      return !idTypeCompany.includes(1)
        ? schema.min(1, "Campo requerido").required("Campo requerido")
        : schema.optional();
    }),

  idTypeCompany: validator
    .number()
    .min(1, "Campo requerido")
    .required("Campo requerido"),
  identificationNumber: validator
    .string()
    .required("Campo requerido")
    .matches(regex.onlyNumbers.execute, regex.onlyNumbers.message)
    .min(6, "Mínimo 6 caracteres")
    .max(12, "Máximo 12 caracteres"),
  dv: validator.string(),
  businessName: validator
    .string()
    .required("Campo requerido")
    .matches(regex.alphanumeric.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  companyName: validator
    .string()
    .when("idTypeCompany", (idTypeCompany: number[], schema) => {
      return idTypeCompany.includes(1)
        ? schema.required("Campo requerido")
        : schema.optional();
    })
    .matches(regex.alphanumeric.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  webPage: validator
    .string()
    .required("Campo requerido")
    .matches(regex.allCharactersTrimmed.execute, regex.allCharactersTrimmed.message)
    .matches(regex.trim.execute, regex.trim.message),
  name: validator
    .string()
    .when("idTypeCompany", (idTypeCompany: number[], schema) => {
      return !idTypeCompany.includes(1)
        ? schema.required("Campo requerido")
        : schema.notRequired();
    })
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  middleName: validator.string().optional(),
  firstSurname: validator
    .string()
    .when("idTypeCompany", (idTypeCompany: number[], schema) => {
      return !idTypeCompany.includes(1)
        ? schema.required("Campo requerido")
        : schema.notRequired();
    })
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  secondSurname: validator.string().optional(),
  email: validator
    .string()
    .required("Campo requerido")
    .email("Correo electrónico inválido"),
  phone: validator
    .string()
    .required("Campo requerido")
    .matches(regex.onlyNumbers.execute, regex.onlyNumbers.message)
    .min(8, "Mínimo 8 caracteres")
    .max(10, "Máximo 10 caracteres"),
  fullAddress: validator
    .string()
    .required("Campo requerido")
    .matches(
      regex.allCharactersTrimmed.execute,
      regex.allCharactersTrimmed.message
    )
    .matches(regex.trim.execute, regex.trim.message),
  state: validator.boolean().optional(),
  legalRepresentative: validator.object().shape({
    idGender: validator
      .number()
      .min(1, "Campo requerido")
      .required("Campo requerido"),
    idCity: validator
      .number()
      .min(1, "Campo requerido")
      .required("Campo requerido"),
    idIdentificationType: validator
      .number()
      .min(1, "Campo requerido")
      .required("Campo requerido"),
    identificationNumber: validator
      .string()
      .required("Campo requerido")
      .matches(regex.onlyNumbers.execute, regex.onlyNumbers.message)
      .min(6, "Mínimo 6 caracteres")
      .max(12, "Máximo 12 caracteres"),
    name: validator
      .string()
      .required("Campo requerido")
      .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
      .matches(regex.trim.execute, regex.trim.message),
    middleName: validator.string().optional(),
    firstSurname: validator
      .string()
      .required("Campo requerido")
      .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
      .matches(regex.trim.execute, regex.trim.message),
    secondSurname: validator.string().optional(),
    email: validator
      .string()
      .required("Campo requerido")
      .email("Correo electrónico inválido"),
    phone: validator
      .string()
      .required("Campo requerido")
      .matches(regex.onlyNumbers.execute, regex.onlyNumbers.message)
      .min(8, "Mínimo 8 caracteres")
      .max(10, "Máximo 10 caracteres"),
    state: validator.boolean().optional(),
  }),
});
