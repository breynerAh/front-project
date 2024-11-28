import { postCreateCompany } from "@/application/use-cases/administration/company/create.use-case";
import { GetAllCompany } from "@/application/use-cases/company/getAllCompany.use.-case";
import { GetAllIdentificationType } from "@/application/use-cases/utilitaria/identificationType/identificationType.use-case";
import { TetAllTypeCompany } from "@/application/use-cases/utilitaria/typeCompany/typeCompany.use-case";
import { resolver } from "@/common/utils";
import { CompanyRequest } from "@/domain/interfaces/administration/company";
import { useOpenStore } from "@/presentation/store/generic";
import { toastInvoker } from "@repo/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";

export function useCompany() {
  const queryClient = useQueryClient();
  const { setOpen, open } = useOpenStore();

  // Get all identificationType
  const { data: dataGetAllIdentificationType } = useQuery({
    queryKey: ["GetAllIdentificationType"],
    queryFn: () => GetAllIdentificationType(),
  });

  // Get all identificationType
  const { data: dataGetAllTypeCompany } = useQuery({
    queryKey: ["GetAllTypeCompany"],
    queryFn: () => TetAllTypeCompany(),
  });

  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: () => GetAllCompany(),
  });

  const mutation = useMutation({
    mutationKey: ["companies"],
    mutationFn: async (request: CompanyRequest) => {
      await postCreateCompany(request);
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
  const handleOpen = () => {
    setOpen(true);
  };
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

  return {
    control,
    errors,
    data,
    dataGetAllTypeCompany,
    dataGetAllIdentificationType,
    setOpen,
    open,
    handleOpen,
    handleRegister,
    loadingCreate: mutation.isPending || mutation.isSuccess,
    isLoading,
    idTypeCompany,
  };
}
