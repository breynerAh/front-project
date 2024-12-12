import { useUserConfiguration } from "@/presentation/hooks/administration/configuration";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { CircularProgress } from "@mui/material";
import {
  BoxUI,
  ButtonActionResponseUI,
  ControlledAutoCompleteUI,
  ControlledTextFieldUI,
  GridUI,
  TypographyUI,
} from "@repo/ui";
import { ControlledTextFieldDateUI } from "../../../../../../../../../packages/ui/src/components/atoms/forms/input";

export const PersonalInformation = () => {
  const theme = ThemeColor();
  const {
    control,
    errors,
    isPending,
    handleUpdate,
    dataGetAllIdentificationType,
    dataGetAllCargo,
    dataGetAllCompany,
    dataGetAllRol,
  } = useUserConfiguration();

  return (
    <BoxUI
      sx={{
        borderRadius: "10px",
        height: "60vh",
      }}
    >
      <GridUI
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 0px 10px",
          height: "9%",
        }}
      >
        <TypographyUI
          sx={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Información general
        </TypographyUI>
      </GridUI>
      <GridUI
        container
        columnSpacing="14px"
        rowGap="14px"
        // sx={{
        //   padding: "0px 0px 10px",
        //   height: "40%",
        // }}
      >
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="idIdentificationType"
            label="Tipo de documento"
            disabled
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
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="documentNumber"
            disabled
            error={!!errors?.documentNumber}
            helperText={errors?.documentNumber?.message}
            label="Número de documento"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="firstName"
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
            label="Primer nombre"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="middleName"
            label="Segundo nombre"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="firstLastName"
            error={!!errors?.firstLastName}
            helperText={errors?.firstLastName?.message}
            label="Primer apellido"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="middleLastName"
            label="Segundo apellido"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldDateUI
            control={control}
            error={!!errors?.dateBirth}
            helperText={errors?.dateBirth?.message}
            label="Fecha de nacimiento"
            name="dateBirth"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            error={!!errors?.email}
            helperText={errors?.email?.message}
            disabled
            label="Correo electrónico"
            name="email"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            error={!!errors?.phone}
            helperText={errors?.phone?.message}
            label="Celular"
            name="phone"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            error={!!errors?.userName}
            helperText={errors?.userName?.message}
            label="Nombre de usuario"
            name="userName"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="idCargo"
            label="Cargo"
            disabled
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
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="idRol"
            label="Rol"
            disabled
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
        <GridUI item xs={12} sm={12} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="idCompany"
            label="Empresa"
            disabled
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
      <BoxUI width="100%" display="flex" justifyContent="flex-end" mt="20px">
        <ButtonActionResponseUI
          onClick={handleUpdate}
          startIcon={
            isPending ? (
              <CircularProgress size={20} sx={{ color: "white" }} />
            ) : (
              <SaveOutlinedIcon />
            )
          }
          text="Actualizar"
          disabled={isPending}
          sx={{
            backgroundColor: theme.secondary.main,
            coloBoxUIr: "white",
            "&:hover": {
              backgroundColor: theme.secondary.dark,
            },
          }}
        />
      </BoxUI>
      {/* <FormCompany /> */}
    </BoxUI>
  );
};
