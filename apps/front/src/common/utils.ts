import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const resolver = yupResolver;

const validator = yup;

const numberFormate = (value: string | number): string => {
  if (!value) return ""; // Si no hay valor, retorna vacío // Convierte el valor en un número y elimina caracteres no numéricos
  const numericValue = parseFloat(String(value).replace(/[^0-9]/g, ""));
  if (isNaN(numericValue)) return ""; // Retorna vacío si no es un número // Formatea el número
  return String(numericValue)
    .split("")
    .reverse()
    .reduce((accumulator, currentValue, currentIndex) => {
      if (currentIndex % 3 === 0 && currentIndex !== 0) {
        return `${accumulator}.${currentValue}`;
      }
      return accumulator + currentValue;
    }, "")
    .split("")
    .reverse()
    .join("");
};

export { resolver, validator, numberFormate };
