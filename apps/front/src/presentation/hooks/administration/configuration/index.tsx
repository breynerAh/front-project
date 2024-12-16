import { getAllCompany } from "@/application/use-cases/administration/company/getAll.use-case";
import { GetAllRol } from "@/application/use-cases/security/rol/rol.use-case";
import { GetByIdUser } from "@/application/use-cases/security/user/getByIdUser.use-case";
import { UpdateUser } from "@/application/use-cases/security/user/updateUser.use-case";
import { GetAllCargo } from "@/application/use-cases/utilitaria/cargo/cargo.use-case";
import { GetAllIdentificationType } from "@/application/use-cases/utilitaria/identificationType/identificationType.use-case";
import { resolver } from "@/common/utils";
import { UpdateUserRequest } from "@/domain/interfaces/security/user/userResponse";
import { schema } from "@/presentation/hooks/administration/configuration/yupSchema";
import { useIdStore } from "@/presentation/store/generic";
import { useUserLoginStore } from "@/presentation/store/security/loginStore";
import { toastInvoker } from "@repo/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useUserConfiguration = () => {
  const { data } = useUserLoginStore();
  const { setId } = useIdStore();

  // Get all identificationType
  const { data: dataGetAllIdentificationType } = useQuery({
    queryKey: ["GetAllIdentificationType"],
    queryFn: () => GetAllIdentificationType(),
    refetchOnWindowFocus: false,
  });
  // Get by id user
  const { data: dataGetByIdUser, refetch } = useQuery({
    queryKey: ["GetByIdUser", data?.idUser],
    queryFn: () =>
      data?.idUser !== undefined ? GetByIdUser(data?.idUser) : null,
    refetchOnWindowFocus: false,
  });

  // Get all cargos
  const { data: dataGetAllCargo } = useQuery({
    queryKey: ["GetAllCargo"],
    queryFn: () => GetAllCargo(),
    refetchOnWindowFocus: false,
  });

  // Get all companies
  const { data: dataGetAllCompany } = useQuery({
    queryKey: ["GetAllCompany"],
    queryFn: () => getAllCompany(),
    refetchOnWindowFocus: false,
  });

  // Get all roles
  const { data: dataGetAllRol } = useQuery({
    queryKey: ["GetAllRol"],
    queryFn: () => GetAllRol(),
    refetchOnWindowFocus: false,
  });

  const mutationUpdate = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: async (request: UpdateUserRequest) =>
      await UpdateUser(data?.idUser || 0, request),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: {
      idIdentificationType: 0,
      documentNumber: "",
      firstName: "",
      middleName: "",
      firstLastName: "",
      middleLastName: "",
      dateBirth: "",
      email: "",
      phone: "",
      userName: "",
      idCargo: 0,
      idRol: 0,
      idCompany: 0,
    },
  });

  useEffect(() => {
    if (dataGetByIdUser?.id) {
      setId(dataGetByIdUser?.persons?.companyPerson[0]?.idCompany || 0);
      reset({
        idIdentificationType: dataGetByIdUser?.persons?.idIdentificationType,
        documentNumber: dataGetByIdUser?.persons?.documentNumber,
        firstName: dataGetByIdUser?.persons?.firstName,
        middleName: dataGetByIdUser?.persons?.middleName,
        firstLastName: dataGetByIdUser?.persons?.firstLastName,
        middleLastName: dataGetByIdUser?.persons?.middleLastName,
        dateBirth: dataGetByIdUser?.persons?.dateBirth?.toString(),
        email: dataGetByIdUser?.persons?.email,
        phone: dataGetByIdUser?.persons?.phone,
        userName: dataGetByIdUser?.userName,
        idCargo: dataGetByIdUser?.persons?.idCargo,
        idRol: dataGetByIdUser?.userRole?.[0]?.idRole,
        idCompany: dataGetByIdUser?.persons?.companyPerson?.[0]?.idCompany,
      });
    }
  }, [dataGetByIdUser, reset, setId]);

  const handleUpdate = handleSubmit((dataValues) => {
    const data = {
      id: dataGetByIdUser?.id,
      userName: dataValues?.userName,
      firstName: dataValues?.firstName,
      middleName: dataValues?.middleName || undefined,
      firstLastName: dataValues?.firstLastName,
      middleLastName: dataValues?.middleLastName || undefined,
      dateBirth: new Date(dataValues?.dateBirth),
      phone: dataValues?.phone,
    };
    mutationUpdate.mutate(data, {
      onSuccess: () => {
        toastInvoker("Información actualizada", "success");
        reset({});
        refetch();
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
    control,
    errors,
    isPending: mutationUpdate.isPending,
    handleUpdate,
    dataGetAllIdentificationType,
    dataGetAllCargo,
    dataGetAllCompany,
    dataGetAllRol,
    dataGetByIdUser,
  };
};
