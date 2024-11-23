import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetAllCompany } from "@/application/use-cases/company/getAllCompany.use.-case";
import { useForm } from "react-hook-form";
import { resolver } from "@/common/utils";
import { schema } from "./yupSchema";

export function useCompany() {
  const [open, setOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["companies"],
    queryFn: () => GetAllCompany(),
  });

  const {
    control,
    formState: { errors },
    // handleSubmit,
    // // getValues,
    // watch,
    // setValue,
    // reset,
  } = useForm({
    resolver: resolver(schema),
    values: {
      id_banco: 0,
      cod_banco: "",
      descripcion: "",
      id_tipo_cuenta: 0,
      cuenta: "",
      id_cuenta: 0,
      id_forma_pago: 0,
      estado: true,
      tesChequera: {
        numero_inicial: "",
        numero_final: "",
        numero_actual: "",
      },
    },
  });
  console.log(data);
  const handleOpen = () => {
    console.log("el chamo");
    setOpen(true);
  };
  return { control, errors, handleOpen, setOpen, open, data };
}
