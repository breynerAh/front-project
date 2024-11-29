import { getAllCompany } from "@/application/use-cases/administration/company/getAll.use-case";
import { postCreateCompany } from "@/application/use-cases/administration/company/create.use-case";
import { updateCompany } from "@/application/use-cases/administration/company/update.use.-case";
import { GetAllIdentificationType } from "@/application/use-cases/utilitaria/identificationType/identificationType.use-case";
import { TetAllTypeCompany } from "@/application/use-cases/utilitaria/typeCompany/typeCompany.use-case";
import { resolver } from "@/common/utils";
import { CompanyRequest } from "@/domain/interfaces/administration/company";
import { useIdStore, useOpenStore } from "@/presentation/store/generic";
import { toastInvoker } from "@repo/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";
import { getOneCompany } from "@/application/use-cases/administration/company/getOne.use-case";
import { useEffect } from "react";
import { deleteCompany } from "@/application/use-cases/administration/company/delete.use-case";
import { GetAllCity } from "@/application/use-cases/utilitaria/city/city.use-case";
import { GetAllGender } from "@/application/use-cases/utilitaria/gender/gender.use-case";

export function useCompany() {
  const queryClient = useQueryClient();
  const { setOpen, open } = useOpenStore();
  const { id } = useIdStore();

  // Get all identificationType
  const { data: dataGetAllIdentificationType } = useQuery({
    queryKey: ["GetAllIdentificationType"],
    queryFn: () => GetAllIdentificationType(),
  });
  const { data: dataCity } = useQuery({
    queryKey: ["GetAllCity"],
    queryFn: () => GetAllCity(),
  });
  const { data: dataGender } = useQuery({
    queryKey: ["GetAllGender"],
    queryFn: () => GetAllGender(),
  });

  // Get all identificationType
  const { data: dataGetAllTypeCompany } = useQuery({
    queryKey: ["GetAllTypeCompany"],
    queryFn: () => TetAllTypeCompany(),
  });

  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: () => getAllCompany(),
  });

  const { data: dataOne, isLoading: isLoadingData } = useQuery({
    queryKey: ["id", id],
    queryFn: () => getOneCompany(id ? id : 0),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationKey: ["companies"],
    mutationFn: async (request: CompanyRequest) => {
      await postCreateCompany(request);
    },
  });

  const mutationUpdate = useMutation({
    mutationKey: ["companiesUpdate"],
    mutationFn: async (request: CompanyRequest) => {
      await updateCompany(request, id);
    },
  });

  const mutationDelete = useMutation({
    mutationKey: ["companies"],
    mutationFn: async (request: { id: number; state: number }) => {
      await deleteCompany(request);
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    // // getValues,
    watch,
    // setValue,
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: {
      idIdentificationType: 0,
      idTypeCompany: 0,
      identificationNumber: "",
      dv: "",
      businessName: "",
      companyName: "",
      webPage: "",
      name: "",
      middleName: "",
      firstSurname: "",
      secondSurname: "",
      email: "",
      phone: "",
      fullAddress: "",
      legalRepresentative: {
        idGender: 0,
        idCity: 0,
        idIdentificationType: 0,
        identificationNumber: "",
        name: "",
        middleName: "",
        firstSurname: "",
        secondSurname: "",
        email: "",
        phone: "",
        state: true,
      },
    },
  });

  const idTypeCompany = watch("idTypeCompany");

  useEffect(() => {
    if (id && dataOne) {
      reset({
        idIdentificationType: dataOne?.idIdentificationType,
        idTypeCompany: dataOne?.idTypeCompany,
        identificationNumber: `${dataOne?.identificationNumber}`,
        dv: dataOne?.dv,
        businessName: dataOne?.businessName,
        companyName: dataOne?.companyName,
        webPage: dataOne?.webPage,
        name: dataOne?.name,
        middleName: dataOne?.middleName,
        firstSurname: dataOne?.firstSurname,
        secondSurname: dataOne?.secondSurname,
        email: dataOne?.email,
        phone: dataOne?.phone,
        fullAddress: dataOne?.fullAddress,
        legalRepresentative: {
          idGender: dataOne?.legalRepresentative?.idGender,
          idCity: dataOne?.legalRepresentative?.idCity,
          idIdentificationType:
            dataOne?.legalRepresentative?.idIdentificationType,
          identificationNumber: `${dataOne?.legalRepresentative?.identificationNumber}`,
          name: dataOne?.legalRepresentative?.name,
          middleName: dataOne?.legalRepresentative?.middleName,
          firstSurname: dataOne?.legalRepresentative?.firstSurname,
          secondSurname: dataOne?.legalRepresentative?.secondSurname,
          email: dataOne?.legalRepresentative?.email,
          phone: dataOne?.legalRepresentative?.phone,
          state: dataOne?.legalRepresentative?.state,
        },
      });
    }
  }, [id, dataOne, reset]);

  const handleRegister = handleSubmit((data) => {
    mutation.mutate(
      {
        ...data,
        idState: 1,
        identificationNumber: Number(data?.identificationNumber),
        idIdentificationType:
          idTypeCompany === 1 ? 2 : data?.idIdentificationType || undefined,
        legalRepresentative: {
          ...data?.legalRepresentative,
          identificationNumber: Number(
            data?.legalRepresentative?.identificationNumber
          ),
        },
      },
      {
        onSuccess: () => {
          reset({
            idIdentificationType: 0,
            idTypeCompany: 0,
            legalRepresentative: {
              idCity: 0,
              idGender: 0,
              idIdentificationType: 0,
            },
          });
          toastInvoker("Empresa creada con éxito", "success");
          queryClient.invalidateQueries({ queryKey: ["companies"] });
          setOpen(false);
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            const message = error?.response?.data?.message || "Error interno.";
            toastInvoker(message, "error");
          }
        },
      }
    );
  });

  const handleUpdate = handleSubmit((data) => {
    mutationUpdate.mutate(
      {
        ...data,
        idState: 1,
        identificationNumber: Number(data?.identificationNumber),
        idIdentificationType:
          idTypeCompany === 1 ? 2 : data?.idIdentificationType || undefined,
        legalRepresentative: {
          ...data?.legalRepresentative,
          id: dataOne?.legalRepresentative?.id,
          identificationNumber: Number(
            data?.legalRepresentative?.identificationNumber
          ),
        },
      },
      {
        onSuccess: () => {
          reset({
            idIdentificationType: 0,
            idTypeCompany: 0,
            legalRepresentative: {
              idCity: 0,
              idGender: 0,
              idIdentificationType: 0,
            },
          });
          toastInvoker("Empresa actualizada con éxito", "success");
          queryClient.invalidateQueries({ queryKey: ["companies"] });
          setOpen(false);
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            const message = error?.response?.data?.message || "Error interno.";
            toastInvoker(message, "error");
          }
        },
      }
    );
  });

  const handleDelete = (id: number, state: number) => {
    console.log(state);
    mutationDelete.mutate(
      { id, state: state },
      {
        onSuccess: () => {
          reset({});
          toastInvoker("Estado actualizado con éxito", "success");
          queryClient.invalidateQueries({ queryKey: ["companies"] });
          setOpen(false);
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            const message = error?.response?.data?.message || "Error interno.";
            toastInvoker(message, "error");
          }
        },
      }
    );
  };

  return {
    control,
    errors,
    data,
    dataGetAllTypeCompany,
    dataGetAllIdentificationType,
    dataCity,
    dataGender,
    setOpen,
    open,
    handleOpen: () => setOpen(true),
    handleRegister,
    handleUpdate,
    handleDelete,
    loadingCreate:
      mutation.isPending ||
      mutation.isSuccess ||
      mutationUpdate.isPending ||
      mutationUpdate.isSuccess ||
      isLoadingData,
    isLoading,
    idTypeCompany,
  };
}
