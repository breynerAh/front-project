import { resolver } from "@/common/utils";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetAllCompany } from "@/application/use-cases/administration/company/company.use-case";
import { GetAllRol } from "@/application/use-cases/security/rol/rol.use-case";
import { GetAllCargo } from "@/application/use-cases/utilitaria/cargo/cargo.use-case";
import { GetAllIdentificationType } from "@/application/use-cases/utilitaria/identificationType/identificationType.use-case";
import { CreateUser } from "@/application/use-cases/security/user/user.use-case";
import { UserRequest } from "@/domain/interfaces/security/user/userResponse";
import { toastInvoker } from "@repo/ui";
import { CommonText } from "@/presentation/locale/commonText";
import { AxiosError } from "axios";

export default function useUserList() {
  const theme = ThemeColor();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const message = CommonText();

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    // watch,
    // resetField,
    // setValue,
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: {
      idIdentificationType: 0,
      documentNumber: "",
      firstName: "",
      firstLastName: "",
      dateBirth: "",
      email: "",
      phone: "",
      userName: "",
      idCargo: 0,
      idRol: 0,
      idCompany: 0,
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

  //Mutation
  const mutation = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (request: UserRequest) => await CreateUser(request),
  });

  const handleOpen = () => {
    reset({});
    setOpen(true);
  };

  const handleSubmit = onSubmit((dataValues) => {
    const data = {
      userName: dataValues?.userName,
      email: dataValues?.email,
      idCompany: dataValues?.idCompany,
      idIdentificationType: dataValues?.idIdentificationType,
      idCargo: dataValues?.idCargo,
      documentNumber: dataValues?.documentNumber,
      firstName: dataValues?.firstName,
      middleName: dataValues?.middleName || undefined,
      firstLastName: dataValues?.firstLastName,
      middleLastName: dataValues?.middleLastName || undefined,
      dateBirth: new Date(dataValues?.dateBirth),
      phone: dataValues?.phone,
    };
    mutation.mutate(data, {
      onSuccess: () => {
        toastInvoker(message.toast.successCreate, "success");
        queryClient.invalidateQueries({
          queryKey: ["GetAllCompany"],
        });
        queryClient.invalidateQueries({
          queryKey: ["GetAllRol"],
        });
        queryClient.invalidateQueries({
          queryKey: ["GetAllCargo"],
        });
        queryClient.invalidateQueries({
          queryKey: ["GetAllIdentificationType"],
        });
        reset({});
        setOpen(!open);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const message = error?.response?.data?.message || "Error interno.";
          toastInvoker(message, "error");
        }
      },
    });
  });

  return {
    theme,
    open,
    handleOpen,
    setOpen,
    control,
    errors,
    isPending: mutation.isPending,
    handleSubmit,
    dataGetAllCompany,
    dataGetAllRol,
    dataGetAllCargo,
    dataGetAllIdentificationType,
  };
}
