import { useLogin } from "@/presentation/hooks/security/login";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import {
  BoxUI,
  ButtonUI,
  ControlledTextFieldUI,
  GridUI,
  ImageUI,
  TypographyUI,
} from "@repo/ui";
import { motion } from "motion/react";
import { useState } from "react";
import { EmailRecoveryPasswordContainer } from "../../recoveryPassword/emailRecoveryPasswordContainer";

export default function LoginContainer() {
  const theme = ThemeColor();
  const { control, errors, handleSubmit } = useLogin();
  const [showRecovery, setShowRecovery] = useState(false);

  return (
    <GridUI
      container
      columnSpacing={2}
      rowGap={2}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
    >
      <GridUI
        item
        xs={12}
        sm={8}
        md={9}
        lg={9}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: theme?.primary?.dark,
        }}
      >
        <BoxUI
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 6,
            backgroundColor: "#1e3e62",
            overflow: "hidden",
          }}
        >
          <BoxUI
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200px",
              height: "200px",
              backgroundColor: "#8C512F",
              borderRadius: "50%",
              animation: "orbit 30s linear infinite",
              animationDelay: "0s",
              transformOrigin: "center",
            }}
          />

          <BoxUI
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200px",
              height: "200px",
              backgroundColor: "#03A685",
              borderRadius: "50%",
              animation: "orbit 25s linear infinite",
              animationDelay: "1s",
              transformOrigin: "center",
            }}
          />

          <BoxUI
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200px",
              height: "200px",
              backgroundColor: "#8C512F",
              borderRadius: "50%",
              animation: "orbit 20s linear infinite",
              animationDelay: "2s",
              transformOrigin: "center",
            }}
          />
        </BoxUI>
        <BoxUI
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(40px)",
            zIndex: 7,
          }}
        />

        <BoxUI
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            position: "relative",
            zIndex: 8,
          }}
        >
          <ImageUI
            src="/images/Imagen_login.svg"
            alt="Ilustración de equipo trabajando en un rompecabezas"
            style={{ width: "100%", height: "80%" }}
          />
        </BoxUI>
      </GridUI>

      {/* Panel derecho con formulario */}
      <GridUI
        item
        xs={12}
        sm={4}
        md={3}
        lg={3}
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "9px",
          overflow: "hidden",
          // boxShadow: "-10px 0 20px rgba(0, 0, 0, 0.1)",
          flexDirection: "column",
        }}
      >
        {showRecovery && (
          <BoxUI
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: "10%",
              zIndex: 8,
            }}
          >
            <IconButton
              // disabled={isPending}
              onClick={() => setShowRecovery(false)}
              sx={{
                padding: 0,
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <ArrowBackIcon
                sx={{
                  fontSize: 35,
                  color: theme.primary.main,
                }}
              />
            </IconButton>
          </BoxUI>
        )}
        <BoxUI
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: !showRecovery ? "5px" : "20px",
          }}
        >
          <ImageUI
            src="/images/fondo_aris_dark.svg"
            alt="Logo"
            style={{ maxWidth: "80%" }}
          />
        </BoxUI>
        <motion.div
          initial={{ x: 0, opacity: 1 }} // Estado inicial
          animate={
            !showRecovery
              ? {
                  x: "0%",
                  opacity: 1,
                }
              : {
                  x: "-100%",
                  opacity: 0,
                }
          } // Animación
          exit={{ x: "-100%", opacity: 0 }} // Al salir
          transition={{ duration: 0.5 }}
          style={{ width: "100%", height: "auto", marginTop: "25px" }}
        >
          {!showRecovery && (
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
                Iniciar sesión
              </TypographyUI>
              <GridUI
                container
                columnSpacing={2}
                rowGap={2}
                justifyContent="center"
              >
                <GridUI item xs={11}>
                  <ControlledTextFieldUI
                    name="email"
                    label="correo electrónico"
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                    control={control}
                    type="text"
                  />
                </GridUI>
                <GridUI item xs={11}>
                  <ControlledTextFieldUI
                    name="password"
                    label="password"
                    type="password"
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                    control={control}
                  />
                </GridUI>
                <GridUI item xs={11}>
                  <ButtonUI
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: "#00b6e2",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#0090b3",
                      },
                    }}
                  >
                    Iniciar sesión
                  </ButtonUI>
                </GridUI>
                <GridUI item xs={12}>
                  <BoxUI
                    sx={{
                      textAlign: "center",
                      marginTop: "1rem",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowRecovery(true)}
                  >
                    ¿Olvidaste tu contraseña?
                  </BoxUI>
                </GridUI>
              </GridUI>
            </BoxUI>
          )}
        </motion.div>
        {showRecovery && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }} // Estado inicial fuera de la pantalla
            animate={
              showRecovery ? { x: "0%", opacity: 1 } : { x: "100%", opacity: 0 }
            } // Animación al entrar y salir
            exit={{ x: "100%", opacity: 0 }} // Al salir
            transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "80%" }}
          >
            <EmailRecoveryPasswordContainer />
          </motion.div>
        )}
      </GridUI>
      {/* <EmailRecoveryPasswordContainer /> */}

      {/* Keyframes para animación de bolitas */}
      <style>
        {`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(500px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(500px) rotate(-360deg);
          }
        }
  `}
      </style>
    </GridUI>
  );
}
