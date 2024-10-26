import { useLogin } from "@/presentation/hooks/security/login";
import {
  BoxUI,
  ButtonUI,
  ControlledTextFieldUI,
  GridUI,
  ImageUI,
  TypographyUI,
} from "@repo/ui";

export default function LoginContainer() {
  const { control, errors, handleSubmit } = useLogin();

  return (
    <BoxUI sx={{ display: "flex", height: "100vh" }}>
      <BoxUI
        sx={{
          backgroundColor: "#042b47",
          width: "65%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageUI
          src="/images/Fondo_login.svg"
          alt="Ilustración de equipo trabajando en un rompecabezas"
          style={{ maxWidth: "80%" }}
        />
      </BoxUI>
      <BoxUI
        sx={{
          backgroundColor: "white",
          width: "35%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          boxShadow: "-10px 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BoxUI sx={{ width: "100%" }}>
          <TypographyUI sx={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            aris
          </TypographyUI>
          <GridUI container columnSpacing={2} rowGap={2}>
            <GridUI item xs={12} sm={12} md={12} lg={12}>
              <ControlledTextFieldUI
                name="email"
                label="correo electrónico"
                error={!!errors?.email}
                helperText={errors?.email?.message}
                control={control}
                type="text"
              />
            </GridUI>
            <GridUI item xs={12} sm={12} md={12} lg={12}>
              <ControlledTextFieldUI
                name="password"
                label="password"
                error={!!errors?.password}
                helperText={errors?.password?.message}
                control={control}
                type="text"
              />
            </GridUI>
            <GridUI item xs={12} sm={12} md={12} lg={12}>
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
            <GridUI item xs={12} sm={12} md={12} lg={12}>
              <BoxUI sx={{ textAlign: "center", marginTop: "1rem" }}>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </BoxUI>
            </GridUI>
          </GridUI>
        </BoxUI>
      </BoxUI>
    </BoxUI>
  );
}
