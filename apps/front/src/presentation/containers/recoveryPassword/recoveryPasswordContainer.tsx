import { useRecoveryPassword } from "@/presentation/hooks/recoveryPassword/useRecoveryPassword";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { CircularProgress } from "@mui/material";
import {
  BoxUI,
  ButtonUI,
  ControlledTextFieldUI,
  GridUI,
  ImageUI,
  LabelledCheckboxUI,
  TypographyUI,
} from "@repo/ui";

export const RecoveryPasswordContainer = () => {
  const theme = ThemeColor();
  const {
    control,
    errors,
    validationPassword,
    dataForm,
    isPending,
    validators,
    setValue,
    handleSubmit,
  } = useRecoveryPassword();

  const styles = {
    text: {
      fontFamily: "Poppins",
      fontSize: "14px",
      color: "#414141",
      fontWeight: "400",
    },
    containerText: { display: "flex", gap: "4px", alignItems: "center" },
  };

  const validate =
    dataForm?.password && dataForm?.confirmPassword
      ? dataForm?.password !== dataForm?.confirmPassword
      : false;

  return (
    <BoxUI
      sx={{
        display: "flex",
        flex: 1,
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e6eaf2",
      }}
    >
      <BoxUI
        sx={{
          backgroundColor: theme.system.background,
          borderRadius: "15px",
          padding: "40px",
          display: "flex",
          width: "465px",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0px 0px 5px 0px rgba(0, 7, 30, 0.1)",
        }}
      >
        <BoxUI
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <BoxUI
            sx={{
              width: "100%",
              height: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageUI
              src="/images/fondo_aris_dark.svg"
              alt="Logo"
              style={{ maxWidth: "80%" }}
            />
          </BoxUI>

          <TypographyUI
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "0.15000000596046448px",
              textAlign: "center",
              color: "#414141",
            }}
          >
            Recuperar contraseña
          </TypographyUI>
        </BoxUI>
        <GridUI
          container
          columnSpacing={2}
          rowGap={4}
          columns={{ xs: 2, sm: 8, md: 9, lg: 12 }}
        >
          <GridUI item xs={2} sm={8} md={9} lg={12}>
            <ControlledTextFieldUI
              control={control}
              type={dataForm?.viewPassword ? "text" : "password"}
              name="password"
              label="Contraseña"
              error={!!errors.password}
              helperText={errors?.password?.message}
              disabled={isPending}
            />
          </GridUI>
          <GridUI item xs={2} sm={8} md={9} lg={12}>
            <ControlledTextFieldUI
              control={control}
              type={dataForm?.viewPassword ? "text" : "password"}
              name="confirmPassword"
              label="Nueva contraseña"
              error={!!errors.confirmPassword || validate}
              helperText={
                errors?.confirmPassword?.message
                  ? errors?.confirmPassword?.message
                  : validate
                  ? "La contraseña no coincide."
                  : ""
              }
              disabled={isPending}
            />
          </GridUI>

          <GridUI item xs={2} sm={8} md={9} lg={12}>
            <LabelledCheckboxUI
              label="Mostrar contraseña"
              checked={!!dataForm?.viewPassword}
              // disabled={isPending}
              customOnChange={() =>
                setValue("viewPassword", !dataForm?.viewPassword)
              }
            />
          </GridUI>
        </GridUI>
        <BoxUI
          sx={{
            display: "flex",
            gap: "3px",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <TypographyUI sx={styles.text}>
            La contraseña debe llevar:
          </TypographyUI>
          {validationPassword?.map((validate, index) => {
            return (
              <BoxUI sx={styles.containerText} key={index}>
                {validate?.condition ? (
                  <TaskAltIcon
                    sx={{ fontSize: 18, color: theme.success.main }}
                  />
                ) : (
                  <HighlightOffIcon
                    sx={{ fontSize: 18, color: theme.error.main }}
                  />
                )}
                <TypographyUI sx={styles.text}>
                  {validate?.message}
                </TypographyUI>
              </BoxUI>
            );
          })}
        </BoxUI>

        <ButtonUI
          onClick={handleSubmit}
          disabled={!validators?.every((value) => !!value) || isPending}
          sx={{
            background: theme.primary.main,
            color: "white",
            "&:hover": {
              background: theme.primary.dark,
            },
            "&:disabled": {
              background: "#8A8A8A",
              color: "white",
            },
          }}
        >
          {isPending ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Establecer contraseña"
          )}
        </ButtonUI>
      </BoxUI>
    </BoxUI>
  );
};
