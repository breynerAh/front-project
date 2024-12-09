import { Login } from "@/application/use-cases/security";
import { resolver, validator } from "@/common/utils";
import { LoginRequest } from "@/domain/interfaces/security/login/loginApiResponses";
import { CommonText } from "@/presentation/locale/commonText";
import { useLoginStore } from "@/presentation/store/security/loginStore";
import { toastInvoker } from "@repo/ui";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

export function useLogin() {
  const message = CommonText();
  const { setToken } = useLoginStore();

  const schema = validator.object().shape({
    // email: validator.string().required(message?.errors?.required),
    // password: validator.string().required(message?.errors?.required),
    email: validator
      .string()
      .email("El email no es válido")
      .required(message?.errors?.required),
    password: validator.string().required(message?.errors?.required),
    viewPassword: validator.boolean().nullable(),
  });

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: resolver(schema),
    values: {
      email: "",
      password: "",
      viewPassword: false,
    },
  });
  const dataForm = watch();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (request: LoginRequest) => await Login(request),
  });

  const handleSubmit = onSubmit((data) => {
    mutation.mutate(
      { email: data?.email, password: data?.password },
      {
        onSuccess: (response) => {
          setToken(response.token);
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
    handleSubmit,
    errors,
    control,
    isPending: mutation.isPending,
    disabled: !dataForm?.email || !dataForm?.password,
    dataForm,
    setValue,
  };
}
