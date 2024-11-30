import { resolver } from "@/common/utils";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCompany } from "@/application/use-cases/administration/company/getAll.use-case";
import { GetAllRol } from "@/application/use-cases/security/rol/rol.use-case";
import { GetAllCargo } from "@/application/use-cases/utilitaria/cargo/cargo.use-case";
import { GetAllIdentificationType } from "@/application/use-cases/utilitaria/identificationType/identificationType.use-case";
import { CreateUser } from "@/application/use-cases/security/user/createUser.use-case";
import {
  UpdateUserRequest,
  UserRequest,
} from "@/domain/interfaces/security/user/userResponse";
import { toastInvoker } from "@repo/ui";
import { CommonText } from "@/presentation/locale/commonText";
import { AxiosError } from "axios";
import { GetByIdUser } from "@/application/use-cases/security/user/getByIdUser.use-case";
import { useUserStore } from "@/presentation/store/security/user";
import { UpdateUser } from "@/application/use-cases/security/user/updateUser.use-case";

export default function useUser() {
  const theme = ThemeColor();
  const [open, setOpen] = useState<boolean | undefined>(undefined);
  const queryClient = useQueryClient();
  const message = CommonText();
  const { userId, updateUserId } = useUserStore();

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
    queryFn: () => getAllCompany(),
    refetchOnWindowFocus: false,
  });
  // Get all roles
  const { data: dataGetAllRol } = useQuery({
    queryKey: ["GetAllRol"],
    queryFn: () => GetAllRol(),
    refetchOnWindowFocus: false,
  });
  // Get all cargos
  const { data: dataGetAllCargo } = useQuery({
    queryKey: ["GetAllCargo"],
    queryFn: () => GetAllCargo(),
    refetchOnWindowFocus: false,
  });
  // Get all identificationType
  const { data: dataGetAllIdentificationType } = useQuery({
    queryKey: ["GetAllIdentificationType"],
    queryFn: () => GetAllIdentificationType(),
    refetchOnWindowFocus: false,
  });

  // Get by id user
  const { data: dataGetByIdUser } = useQuery({
    queryKey: ["GetByIdUser", userId],
    queryFn: () => (userId !== undefined ? GetByIdUser(userId) : null),
    refetchOnWindowFocus: false,
  });

  //Mutation
  const mutation = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (request: UserRequest) => await CreateUser(request),
  });
  const mutationUpdate = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: async (request: UpdateUserRequest) =>
      await UpdateUser(userId || 0, request),
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
      idRol: dataValues?.idRol,
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
        queryClient.invalidateQueries({
          queryKey: ["GetAllUserList"],
        });
        reset({});
        setOpen(false);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const message = error?.response?.data?.message || "Error interno.";
          toastInvoker(message, "error");
        }
      },
    });
  });

  const handleUpdate = onSubmit((dataValues) => {
    const data = {
      id: dataGetByIdUser?.id,
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
      idRol: dataValues?.idRol,
    };
    mutationUpdate.mutate(data, {
      onSuccess: () => {
        toastInvoker(message.toast.successUpdate, "success");
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
        queryClient.invalidateQueries({
          queryKey: ["GetAllUserList"],
        });
        reset({});
        setOpen(false);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const message = error?.response?.data?.message || "Error interno.";
          toastInvoker(message, "error");
        }
      },
    });
  });

  useEffect(() => {
    if (!open) {
      updateUserId(undefined);
      reset({});
    }
  }, [open, updateUserId, reset]);

  useEffect(() => {
    if (dataGetByIdUser?.id) {
      setOpen(true);
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
  }, [dataGetByIdUser, reset]);

  return {
    theme,
    open,
    handleOpen,
    setOpen,
    control,
    errors,
    isPending: mutation.isPending,
    isPendingUpdate: mutationUpdate.isPending,
    handleSubmit,
    handleUpdate,
    dataGetAllCompany,
    dataGetAllRol,
    dataGetAllCargo,
    dataGetAllIdentificationType,
    userId,
  };
}
