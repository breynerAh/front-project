import { resolver } from "@/common/utils";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useUser() {
  const theme = ThemeColor();
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    watch,
    resetField,
    setValue,
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: {
      classLevel: "",
      className: "",
      groupLevel: "",
      groupName: "",
      majorAccountLevel: "",
      majorAccountName: "",
      submajorAccountLevel: "",
      submajorAccountName: "",
      ppto_mensual: "",
      activa: true,
      ccosto: false,
      subccosto: false,
      terceros: false,
      impuesto: false,
      documento_cruce: false,
      fuente: false,
      flujo: false,
      id_estado_financiero: 0,
      id_naturaleza: 0,
      id_empresa: 0,
      id_usuario: 0,

      cod_cta: "",
      niv_cta: 0,
      nom_cta: "",
      cod_cta_cierre: "",
      nom_cta_cierre: "",
      cuenta_cierre: false,
      grupo_estado_fin: false,
      vr_busqueda: "",
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  return { theme, open, handleOpen, setOpen };
}
