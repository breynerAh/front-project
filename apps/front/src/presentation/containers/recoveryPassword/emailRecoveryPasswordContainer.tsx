import { usePostEmailRecoveryPassword } from "@/presentation/hooks/recoveryPassword/usePostEmailRecoveryPassword";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { CircularProgress } from "@mui/material";
import {
  BoxUI,
  ButtonUI,
  ControlledTextFieldUI,
  GridUI,
  TypographyUI
} from "@repo/ui";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const EmailRecoveryPasswordContainer: FC<{
  onBackToLogin: () => void;
}> = ({ onBackToLogin }) => {
  const theme = ThemeColor();
  const navigate = useNavigate();
  const { control, dataForm, errors, handleSubmit, isPending, messageEmail } =
    usePostEmailRecoveryPassword();

  return (
    <>
      <BoxUI
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <TypographyUI
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.15000000596046448px",
            textAlign: "center",
            color: theme.primary.dark,
          }}
        >
          Recuperar contraseña
        </TypographyUI>

        <BoxUI
          sx={{
            padding: "0 32px 0 32px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TypographyUI
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "0.15000000596046448px",
              textAlign: "left",
              color: theme.primary.dark,
            }}
          >
            {messageEmail
              ? messageEmail
              : "Por favor, ingresa tu correo electrónico para enviarte las instrucciones y restablecer tu contraseña. "}
          </TypographyUI>
        </BoxUI>
        {!messageEmail ? (
          <GridUI
            container
            columnSpacing={2}
            rowGap={2}
            justifyContent="center"
          >
            <GridUI item xs={11}>
              <ControlledTextFieldUI
                control={control}
                name="email"
                label="Correo electrónico"
                error={!!errors.email}
                helperText={errors?.email?.message}
                disabled={isPending}
              />
            </GridUI>

            <GridUI item xs={11}>
              <ButtonUI
                disabled={!dataForm?.email || isPending}
                onClick={handleSubmit}
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
                  "Enviar"
                )}
              </ButtonUI>
            </GridUI>
          </GridUI>
        ) : null}
      </BoxUI>
    </>
  );
};
