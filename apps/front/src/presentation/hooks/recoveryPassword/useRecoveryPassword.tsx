import { postRecoveryPassword } from "@/application/use-cases/recoveryPassword/recoveryPassword.use-case";
import { resolver, validator } from "@/common/utils";
import { toastInvoker } from "@repo/ui";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type TValidations = {
  case: boolean;
  characteristics: boolean;
  characterSpecial: boolean;
  number: boolean;
  validationBetweenPasswords: boolean;
};

export function useRecoveryPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [validations, setValidations] = useState<TValidations>({
    case: false,
    characteristics: false,
    characterSpecial: false,
    number: false,
    validationBetweenPasswords: false,
  });

  /**
   * Schema
   */
  const schema = validator.object().shape({
    password: validator.string().required("Campo requerido"),
    confirmPassword: validator.string().required("Campo requerido"),
    viewPassword: validator.boolean().nullable(),
  });

  /**
   * UserForm
   */
  const {
    control,
    formState: { errors },
    handleSubmit: onSubmit,
    watch,
    setValue,
  } = useForm({
    resolver: resolver(schema),
    values: { password: "", confirmPassword: "", viewPassword: false },
  });
  const dataForm = watch();

  /**
   * Mutation Para el Crear o recuperar contraseña
   */
  const mutation = useMutation({
    mutationKey: ["request"],
    mutationFn: async (request: { id: number; password: string }) =>
      await postRecoveryPassword(token || "", request),
  });

  const validationPassword = [
    {
      condition: validations?.characteristics,
      message: "Mínimo 8 dígitos",
    },
    { condition: validations?.case, message: "1 mayúscula" },
    { condition: validations?.number, message: "1 número" },
    {
      condition: validations?.characterSpecial,
      message: "1 carácter especial",
    },
  ];

  /**
   * Constante de validaciones.
   */
  const validators = [
    !!validations?.case,
    !!validations?.characterSpecial,
    !!validations?.characteristics,
    !!validations?.number,
    !!validations?.validationBetweenPasswords,
  ];

  /**
   *  UseEffect para validar campos.
   */
  useEffect(() => {
    const newPassword = dataForm?.password ? String(dataForm?.password) : "";
    const newConfirmePassword = dataForm?.confirmPassword
      ? String(dataForm?.confirmPassword)
      : "";
    const isSpecialChar = /^[A-Za-z0-9\s-]+$/;
    const hasNumber = newPassword && /\d/.test(newPassword);
    const validationBetweenPasswords =
      typeof dataForm?.password === "string" &&
      !!(newPassword === newConfirmePassword);
    setValidations({
      case: newPassword !== newPassword?.toLowerCase(),
      characteristics: newPassword ? newPassword?.length >= 8 : false,
      characterSpecial: newPassword ? !isSpecialChar?.test(newPassword) : false,
      number: !!hasNumber,
      validationBetweenPasswords,
    });
  }, [dataForm?.password, dataForm?.confirmPassword]);

  const handleSubmit = onSubmit((dataValues) => {
    const { password } = dataValues;
    mutation.mutate(
      { id: Number(id || 0), password },
      {
        onSuccess: () => {
          toastInvoker("Contraseña actualizada exitosamente.", "success");
          navigate("/");
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            const message = error?.response?.data?.message;
            toastInvoker(message, "error");
          }
        },
      }
    );
  });

  return {
    control,
    handleSubmit,
    errors,
    validationPassword,
    dataForm,
    setValue,
    validators,
    isPending: mutation.isPending,
  };
}
