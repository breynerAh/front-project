// import { postEmailRecoveryPassword } from "@/application/use-cases/recoveryPassword";
import { postEmailRecoveryPassword } from "@/application/use-cases/recoveryPassword/emailRecoveryPassword.use-case";
import { resolver, validator } from "@/common/utils";
import { toastInvoker } from "@repo/ui";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

export function usePostEmailRecoveryPassword() {
  /**
   * Schema
   */
  const schema = validator.object().shape({
    email: validator
      .string()
      .email("Email invalido")
      .required("Campo requerido"),
  });

  /**
   * UserForm
   */
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit: onSubmit,
  } = useForm({
    resolver: resolver(schema),
    values: { email: "" },
  });
  const dataForm = watch();

  /**
   * Mutation Para el login
   */
  const mutation = useMutation({
    mutationKey: ["request"],
    mutationFn: async (email: string) => await postEmailRecoveryPassword(email),
  });

  /**
   * Función para ejecutar el login
   */
  const handleSubmit = onSubmit((dataValues) => {
    const { email } = dataValues;
    mutation.mutate(email, {
      onError: (error) => {
        if (error instanceof AxiosError) {
          const message = error?.response?.data?.message;
          toastInvoker(message, "error");
        }
      },
    });
  });

  return {
    isPending: mutation.isPending,
    control,
    errors,
    dataForm,
    handleSubmit,
    messageEmail: mutation.data,
  };
}
