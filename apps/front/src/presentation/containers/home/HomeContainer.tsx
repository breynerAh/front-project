import { CommonText } from "@/presentation/locale/commonText";
import { ArrowForward } from "@mui/icons-material";
import { BoxUI, ButtonUI, TypographyUI } from "@repo/ui";
import { useNavigate } from "react-router-dom";

export const HomeContainer = () => {
  const message = CommonText();

  const navigate = useNavigate();
  return (
    <BoxUI
      sx={{
        display: "flex",
        flex: 1,
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TypographyUI variant="h6">
        Bienvenido a la nueva plantilla con arquitectura limpia.
      </TypographyUI>
      <ButtonUI onClick={() => navigate("/app/todo")}>
        {message.home.zustand} <ArrowForward />
      </ButtonUI>
      <ButtonUI onClick={() => navigate("/app/pokemon")}>
        {message.home.api} <ArrowForward />
      </ButtonUI>
    </BoxUI>
  );
};
