import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {
  BoxUI,
  ButtonActionResponseUI,
  ControlledAutoCompleteUI,
  ControlledTextFieldUI,
  GridUI,
} from "@repo/ui";
import { ControlledTextFieldDateUI } from "../../../../../../../../packages/ui/src/components/atoms/forms/input";
import { CircularProgress } from "@mui/material";
import { TUser } from "./types.d";

export default function CreateUser({
  control,
  errors,
  handleSubmit,
  theme,
  dataGetAllCompany,
  dataGetAllRol,
  dataGetAllCargo,
  dataGetAllIdentificationType,
  isPending,
}: TUser) {
  return (
    <div
      style={{
        height: "42vh",
        overflow: "auto",
      }}
    >
      <GridUI container columnSpacing="14px" rowGap="14px">
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledAutoCompleteUI
            control={control}
            name="idIdentificationType"
            label="Tipo de documento"
            error={!!errors?.idIdentificationType}
            helperText={errors?.idIdentificationType?.message}
            options={
              dataGetAllIdentificationType?.map((identificationType) => {
                return {
                  value: identificationType?.id,
                  label: identificationType?.name?.toUpperCase(),
                };
              }) || []
            }
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            name="documentNumber"
            error={!!errors?.documentNumber}
            helperText={errors?.documentNumber?.message}
            label="Número de documento"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            name="firstName"
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
            label="Primer nombre"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            name="middleName"
            label="Segundo nombre"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            name="firstLastName"
            error={!!errors?.firstLastName}
            helperText={errors?.firstLastName?.message}
            label="Primer apellido"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            name="middleLastName"
            label="Segundo apellido"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldDateUI
            control={control}
            error={!!errors?.dateBirth}
            helperText={errors?.dateBirth?.message}
            label="Fecha de nacimiento"
            name="dateBirth"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            error={!!errors?.email}
            helperText={errors?.email?.message}
            label="Correo electrónico"
            name="email"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            error={!!errors?.phone}
            helperText={errors?.phone?.message}
            label="Celular"
            name="phone"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledTextFieldUI
            control={control}
            error={!!errors?.userName}
            helperText={errors?.userName?.message}
            label="Nombre de usuario"
            name="userName"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledAutoCompleteUI
            control={control}
            name="idCargo"
            label="Cargo"
            error={!!errors?.idCargo}
            helperText={errors?.idCargo?.message}
            options={
              dataGetAllCargo?.map((cargo) => {
                return {
                  value: cargo?.id,
                  label: cargo?.name?.toUpperCase(),
                };
              }) || []
            }
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={6}>
          <ControlledAutoCompleteUI
            control={control}
            name="idRol"
            label="Rol"
            error={!!errors?.idRol}
            helperText={errors?.idRol?.message}
            options={
              dataGetAllRol?.map((rol) => {
                return {
                  value: rol?.id,
                  label: rol?.name?.toUpperCase(),
                };
              }) || []
            }
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={12}>
          <ControlledAutoCompleteUI
            control={control}
            name="idCompany"
            label="Empresa"
            error={!!errors?.idCompany}
            helperText={errors?.idCompany?.message}
            options={
              dataGetAllCompany?.map((company) => {
                return {
                  value: company?.id,
                  label: company?.fullName?.toUpperCase(),
                };
              }) || []
            }
          />
        </GridUI>
      </GridUI>
      <BoxUI
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "15px" }}
      >
        <ButtonActionResponseUI
          onClick={handleSubmit}
          startIcon={
            !isPending ? (
              <SaveOutlinedIcon />
            ) : (
              <CircularProgress size={20} sx={{ color: "white" }} />
            )
          }
          text="Crear"
          disabled={isPending}
          sx={{
            backgroundColor: theme.secondary.main,
            color: "white",
            "&:hover": {
              backgroundColor: theme.secondary.dark,
            },
          }}
        />
      </BoxUI>
    </div>
  );
}
