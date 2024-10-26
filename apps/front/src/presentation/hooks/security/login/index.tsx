import { resolver, translate, validator } from "@/common/utils";
import { useForm } from "react-hook-form";

export function useLogin() {
  const schema = validator.object().shape({
    email: validator.string().required(translate("errors.required")),
    password: validator.string().required(translate("errors.required")),
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
