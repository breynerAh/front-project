import { useCompany } from "@/presentation/hooks/administration/company/create";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useIdStore } from "@/presentation/store/generic";
import { ModeEditOutlined } from "@mui/icons-material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {
  BoxUI,
  ButtonActionResponseUI,
  ControlledAutoCompleteUI,
  ControlledTextFieldUI,
  GridUI,
  TypographyUI,
} from "@repo/ui";

export const FormCompany = () => {
  const theme = ThemeColor();
  const { id } = useIdStore();

  const {
    control,
    errors,
    idTypeCompany,
    dataGetAllTypeCompany,
    dataGetAllIdentificationType,
    handleRegister,
    handleUpdate,
    loadingCreate,
  } = useCompany();

  return (
    <div
      style={{
        height: "65vh",
        overflow: "auto",
      }}
    >
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
            fontSize: "16px",
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
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="idTypeCompany"
            // disabled={disabled}
            label="Naturaleza"
            options={(dataGetAllTypeCompany ? dataGetAllTypeCompany : [])?.map(
              (x) => {
                return {
                  value: x?.id,
                  label: x?.name,
                };
              }
            )}
            error={!!errors.idTypeCompany}
            helperText={errors?.idTypeCompany?.message}
          />
        </GridUI>
        {idTypeCompany === 2 && (
          <GridUI item xs={12} sm={6} md={6} lg={4}>
            <ControlledAutoCompleteUI
              control={control}
              name="idIdentificationType"
              // disabled={disabled}
              label="Tipo de documento"
              options={(dataGetAllIdentificationType
                ? dataGetAllIdentificationType
                : []
              )?.map((x) => {
                return {
                  value: x?.id,
                  label: `${x?.name} - ${x?.acronym}`,
                };
              })}
              error={!!errors.idIdentificationType}
              helperText={errors.idIdentificationType?.message}
            />
          </GridUI>
        )}
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="businessName"
            label="Nombre de la empresa"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.businessName}
            helperText={errors?.businessName?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="identificationNumber"
            label={idTypeCompany === 1 ? "Nit" : "Número de documento"}
            inputProps={{
              maxLength: 10,
            }}
            error={!!errors.identificationNumber}
            helperText={errors?.identificationNumber?.message}
          />
        </GridUI>
        {idTypeCompany === 1 ? (
          <GridUI item xs={12} sm={6} md={6} lg={4}>
            <ControlledTextFieldUI
              control={control}
              name="companyName"
              label="Razón social"
              inputProps={{
                maxLength: 50,
              }}
              error={!!errors.companyName}
              helperText={errors?.companyName?.message}
            />
          </GridUI>
        ) : (
          <>
            <GridUI item xs={12} sm={6} md={6} lg={4}>
              <ControlledTextFieldUI
                control={control}
                name="name"
                label="Primer nombre"
                inputProps={{
                  maxLength: 50,
                }}
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
            </GridUI>
            <GridUI item xs={12} sm={6} md={6} lg={4}>
              <ControlledTextFieldUI
                control={control}
                name="middleName"
                label="Segundo nombre"
                inputProps={{
                  maxLength: 50,
                }}
                error={!!errors?.middleName}
                helperText={errors?.middleName?.message}
              />
            </GridUI>
            <GridUI item xs={12} sm={6} md={6} lg={4}>
              <ControlledTextFieldUI
                control={control}
                name="firstSurname"
                label="Primer apellido"
                inputProps={{
                  maxLength: 50,
                }}
                error={!!errors?.firstSurname}
                helperText={errors?.firstSurname?.message}
              />
            </GridUI>
            <GridUI item xs={12} sm={6} md={6} lg={4}>
              <ControlledTextFieldUI
                control={control}
                name="secondSurname"
                label="Segundo apellido"
                inputProps={{
                  maxLength: 50,
                }}
                error={!!errors?.secondSurname}
                helperText={errors?.secondSurname?.message}
              />
            </GridUI>
          </>
        )}
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
            fontSize: "16px",
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
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="phone"
            label="Teléfono principal"
            inputProps={{
              maxLength: 10,
            }}
            error={!!errors.phone}
            helperText={errors?.phone?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="email"
            label="Correo electrónico"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="webPage"
            label="Pagina web"
            inputProps={{
              maxLength: 250,
            }}
            error={!!errors.webPage}
            helperText={errors?.webPage?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={12}>
          <ControlledTextFieldUI
            control={control}
            name="fullAddress"
            label="Domicilio"
            inputProps={{
              maxLength: 250,
            }}
            error={!!errors.fullAddress}
            helperText={errors?.fullAddress?.message}
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
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Representante legal
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
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="legalRepresentative.idIdentificationType"
            // disabled={disabled}
            label="Tipo de documento"
            options={[
              { id: 1, name: "Chamo" },
              { id: 2, name: "Menol" },
            ]?.map((x) => {
              return {
                value: x?.id,
                label: x?.name,
              };
            })}
            error={!!errors.legalRepresentative?.idIdentificationType}
            helperText={
              errors?.legalRepresentative?.idIdentificationType?.message
            }
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.identificationNumber"
            label="Número de documento"
            inputProps={{
              maxLength: 10,
            }}
            error={!!errors.legalRepresentative?.identificationNumber}
            helperText={
              errors?.legalRepresentative?.identificationNumber?.message
            }
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.name"
            label="Primer nombre"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.legalRepresentative?.name}
            helperText={errors?.legalRepresentative?.name?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.middleName"
            label="Segundo nombre"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.legalRepresentative?.middleName}
            helperText={errors?.legalRepresentative?.middleName?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.firstSurname"
            label="Primer apellido"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.legalRepresentative?.firstSurname}
            helperText={errors?.legalRepresentative?.firstSurname?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.secondSurname"
            label="Segundo apellido"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.legalRepresentative?.secondSurname}
            helperText={errors?.legalRepresentative?.secondSurname?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.email"
            label="Correo electrónico"
            inputProps={{
              maxLength: 50,
            }}
            error={!!errors.legalRepresentative?.email}
            helperText={errors?.legalRepresentative?.email?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledTextFieldUI
            control={control}
            name="legalRepresentative.phone"
            label="Teléfono"
            inputProps={{
              maxLength: 10,
            }}
            error={!!errors.legalRepresentative?.phone}
            helperText={errors?.legalRepresentative?.phone?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="legalRepresentative.idGender"
            // disabled={disabled}
            label="Género"
            options={[
              { id: 1, name: "Chamo" },
              { id: 2, name: "Menol" },
            ]?.map((x) => {
              return {
                value: x?.id,
                label: x?.name,
              };
            })}
            error={!!errors.legalRepresentative?.idGender}
            helperText={errors?.legalRepresentative?.idGender?.message}
          />
        </GridUI>
        <GridUI item xs={12} sm={6} md={6} lg={4}>
          <ControlledAutoCompleteUI
            control={control}
            name="legalRepresentative.idCity"
            // disabled={disabled}
            label="Ciudad"
            options={[
              { id: 1, name: "Chamo" },
              { id: 2, name: "Menol" },
            ]?.map((x) => {
              return {
                value: x?.id,
                label: x?.name,
              };
            })}
            error={!!errors.legalRepresentative?.idCity}
            helperText={errors?.legalRepresentative?.idCity?.message}
          />
        </GridUI>
      </GridUI>
      <BoxUI
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "15px",
        }}
      >
        <ButtonActionResponseUI
          onClick={id ? handleUpdate : handleRegister}
          startIcon={id ? <ModeEditOutlined /> : <SaveOutlinedIcon />}
          text={id ? "Actualizar" : "Crear"}
          disabled={loadingCreate}
          loading={loadingCreate}
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
};
