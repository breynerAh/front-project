import { resolver } from "@/common/utils";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useQuery } from "@tanstack/react-query";
import { GetAllCompany } from "@/application/use-cases/administration/company/company.use-case";
import { GetAllRol } from "@/application/use-cases/security/rol/rol.use-case";
import { GetAllCargo } from "@/application/use-cases/utilitaria/cargo/cargo.use-case";
import { GetAllIdentificationType } from "@/application/use-cases/utilitaria/identificationType/identificationType.use-case";

export default function useUser() {
  const theme = ThemeColor();
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    // watch,
    // resetField,
    // setValue,
    // reset,
  } = useForm({
    resolver: resolver(schema),
    values: {
      idIdentificationType: 0,
      documentNumber: "",
      name: "",
      firstSurname: "",
      dateBirth: "",
      email: "",
      phone: "",
      userName: "",
      idCargo: 0,
      idRol: 0,
      idEmpresa: 0,
    },
  });

  // Get all companies
  const { data: dataGetAllCompany } = useQuery({
    queryKey: ["GetAllCompany"],
    queryFn: () => GetAllCompany(),
  });
  // Get all roles
  const { data: dataGetAllRol } = useQuery({
    queryKey: ["GetAllRol"],
    queryFn: () => GetAllRol(),
  });
  // Get all cargos
  const { data: dataGetAllCargo } = useQuery({
    queryKey: ["GetAllCargo"],
    queryFn: () => GetAllCargo(),
  });
  // Get all identificationType
  const { data: dataGetAllIdentificationType } = useQuery({
    queryKey: ["GetAllIdentificationType"],
    queryFn: () => GetAllIdentificationType(),
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = onSubmit((dataValues) => {
    console.log(111, dataValues);
  });

  return {
    theme,
    open,
    handleOpen,
    setOpen,
    control,
    errors,
    handleSubmit,
    dataGetAllCompany,
    dataGetAllRol,
    dataGetAllCargo,
    dataGetAllIdentificationType,
  };
}
