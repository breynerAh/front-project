import { validator } from "@/common/utils";
import { CommonText } from "@/presentation/locale/commonText";
import { regex } from "@/presentation/shared/utils";
const message = CommonText();

export const schema = validator.object().shape({
  idIdentificationType: validator
    .number()
    .required(message.errors.required)
    .min(1, message.errors.required),
  documentNumber: validator
    .string()
    .required(message.errors.required)
    .min(6, "El número de documento debe tener al menos 6 dígitos")
    .max(10, "El número de documento debe tener como máximo 10 dígitos")
    .matches(regex.onlyNumbers.execute, regex.onlyNumbers.message)
    .matches(regex.trim.execute, regex.trim.message),
  name: validator
    .string()
    .required(message.errors.required)
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  middleName: validator
    .string()
    .optional()
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  firstSurname: validator
    .string()
    .required(message.errors.required)
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  secondSurname: validator
    .string()
    .optional()
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  dateBirth: validator.string().required(message.errors.required),
  email: validator
    .string()
    .required(message.errors.required)
    .matches(regex.email.execute, regex.email.message)
    .matches(regex.trim.execute, regex.trim.message),
  phone: validator
    .string()
    .required(message.errors.required)
    .min(10, "El número de teléfono debe tener al menos 10 dígitos")
    .max(10, "El número de teléfono debe tener como máximo 10 dígitos")
    .matches(regex.onlyNumbers.execute, regex.onlyNumbers.message)
    .matches(regex.trim.execute, regex.trim.message),
  userName: validator
    .string()
    .required(message.errors.required)
    .matches(regex.onlyLetters.execute, regex.onlyLetters.message)
    .matches(regex.trim.execute, regex.trim.message),
  idCargo: validator
    .number()
    .required(message.errors.required)
    .min(1, message.errors.required),
  idRol: validator
    .number()
    .required(message.errors.required)
    .min(1, message.errors.required),
  idEmpresa: validator
    .number()
    .required(message.errors.required)
    .min(1, message.errors.required),
});