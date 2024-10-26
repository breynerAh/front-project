import { resolver, validator } from "@/common/utils";
import { CommonText } from "@/presentation/locale/commonText";
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

  const handleSubmit = onSubmit((dataValues) => {
    console.log(dataValues);
  });

  return { handleSubmit, errors, control };
}
