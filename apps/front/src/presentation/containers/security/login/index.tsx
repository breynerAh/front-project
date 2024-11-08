import { useLogin } from "@/presentation/hooks/security/login";
import { useTheme } from "@mui/material";
import {
  BoxUI,
  ButtonUI,
  ControlledTextFieldUI,
  GridUI,
  ImageUI
} from "@repo/ui";

export default function LoginContainer() {
  const theme = useTheme();
  const { control, errors, handleSubmit } = useLogin();

  return (
    <GridUI container columnSpacing={2} rowGap={2} sx={{height: "100vh"}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
     <GridUI item xs={12} sm={8} md={9} lg={9}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: theme?.palette?.primary?.dark,
        }}
      >
        <BoxUI
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 6,
            backgroundColor:"#1e3e62",
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
      <GridUI item xs={12} sm={4} md={3} lg={3}
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"9px",
          boxShadow: "-10px 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BoxUI sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "32px"}}>
          <BoxUI
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageUI
              src="/images/Logo_aris.svg"
              alt="Logo"
              style={{ maxWidth: "80%" }}
            />
          </BoxUI>
          <GridUI container columnSpacing={2} rowGap={2} justifyContent="center">
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
                error={!!errors?.password}
                helperText={errors?.password?.message}
                control={control}
                type="text"
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
              <BoxUI sx={{ textAlign: "center", marginTop: "1rem" }}>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </BoxUI>
            </GridUI>
          </GridUI>
        </BoxUI>
      </GridUI>
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
