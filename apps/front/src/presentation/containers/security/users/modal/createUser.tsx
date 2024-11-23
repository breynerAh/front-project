import { ControlledAutoCompleteUI, ControlledTextFieldUI, GridUI } from "@repo/ui";

export default function CreateUser() {
  return (
    <>
      <GridUI container columnSpacing="14px" rowGap="14px">
        <GridUI item xs={12} sm={4} md={3} lg={2}>
          <ControlledAutoCompleteUI
            control={control}
            customOnChange={handleValue}
            name="p_opcion"
            label="Tipo de documento"
            error={!!errors?.p_opcion}
            helperText={errors?.p_opcion?.message}
            options={option}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={2}>
          <ControlledTextFieldUI
            control={control}
            name="p_valor"
            error={!!errors?.p_valor}
            helperText={errors?.p_valor?.message}
            label="Número de documento"
            isNumericPrice
          />
        </GridUI>
      </GridUI>
    </>
  );
}
