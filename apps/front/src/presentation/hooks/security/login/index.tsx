import { Login } from "@/application/use-cases/security";
import { resolver, validator } from "@/common/utils";
import { LoginRequest } from "@/domain/interfaces/security/login/loginApiResponses";
import { CommonText } from "@/presentation/locale/commonText";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useLogin() {
  const message = CommonText();

  const schema = validator.object().shape({
    email: validator.string().required(message?.errors?.required),
    password: validator.string().required(message?.errors?.required),
  });

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolver(schema),
    values: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (request: LoginRequest) => await Login(request),
  });

  const handleSubmit = onSubmit((data) => {
    console.log(data);
    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log("Success", response);
      },
    });
  });

  return { handleSubmit, errors, control };
}
