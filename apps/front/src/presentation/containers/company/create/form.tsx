import { useCompany } from "@/presentation/hooks/administration/company/create";
import {
  ControlledAutoCompleteUI,
  ControlledTextFieldUI,
  GridUI,
  TypographyUI,
} from "@repo/ui";

export const FormCompany = () => {
  const { control, errors } = useCompany();

  return (
    <>
      <GridUI
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <TypographyUI
          sx={{
            fontSize: "18px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Información general de la empresa
        </TypographyUI>
      </GridUI>
      <GridUI
        container
        columnSpacing="14px"
        rowGap="14px"
        sx={{
          padding: "0px 10px 5px",
        }}
      >
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="idTypeCompany"
            // disabled={disabled}
            label="Naturaleza"
            options={[]?.map((x) => {
              return {
                value: x?.idTypeCompany,
                label: x?.nom_banco,
              };
            })}
            error={!!errors.idTypeCompany}
            helperText={errors?.idTypeCompany?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="business_name"
            label="Nombre de la empresa"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.business_name}
            helperText={errors?.business_name?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="identificationNumber"
            label="Nit"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.identificationNumber}
            helperText={errors?.identificationNumber?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="companyName"
            label="Razón social"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.companyName}
            helperText={errors?.companyName?.message}
          />
        </GridUI>
      </GridUI>

      <GridUI
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <TypographyUI
          sx={{
            fontSize: "18px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Datos contacto
        </TypographyUI>
      </GridUI>
      <GridUI
        container
        columnSpacing="14px"
        rowGap="14px"
        sx={{
          padding: "0px 10px 5px",
        }}
      >
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="business_name"
            label="Teléfono principal"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.business_name}
            helperText={errors?.business_name?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="identificationNumber"
            label="Correo electrónico"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.identificationNumber}
            helperText={errors?.identificationNumber?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="companyName"
            label="Pagina web"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.companyName}
            helperText={errors?.companyName?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={4} md={3} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="companyName"
            label="Domicilio"
            inputProps={{
              maxLength: 3,
            }}
            error={!!errors.companyName}
            helperText={errors?.companyName?.message}
          />
        </GridUI>
      </GridUI>
    </>
  );
};
