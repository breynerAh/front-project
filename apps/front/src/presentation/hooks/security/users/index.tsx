import { resolver } from "@/common/utils";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = onSubmit((dataValues) => {
    console.log(111, dataValues);
  });

  return { theme, open, handleOpen, setOpen, control, errors, handleSubmit };
}
