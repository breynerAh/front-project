import { getMenu } from "@/application/use-cases/administration/menu/getMudule.use-case";
import { resolver, validator } from "@/common/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

export function useLayout() {
  const { data } = useQuery({
    queryKey: ["modulos"],
    queryFn: async () => getMenu(),
  });

  const schema = validator.object().shape({
    search: validator.string().optional(),
  });

  const { control } = useForm({
    resolver: resolver(schema),
    values: {
      search: "",
    },
  });
  /**
   * handle Menú
   */
  const [listOption, setListOption] = React.useState<null | HTMLElement>(null);
  const openListOption = Boolean(listOption);
  const handleClickListOption = (event: React.MouseEvent<HTMLElement>) => {
    setListOption(event.currentTarget);
  };
  const handleCloseListOption = () => {
    setListOption(null);
  };
  const idPopover = listOption ? "simple-popover" : undefined;

  return {
    control,
    arrayMenu: data,
    handleClickListOption,
    handleCloseListOption,
    openListOption,
    listOption,
    idPopover,
  };
}
