import { SvgIconComponent } from "@mui/icons-material";
import { ReactNode } from "react";
import { ButtonActionResponseUI } from "../../molecules/buttonActionNew/buttonAction";
import { BoxUI } from "../box/box";
import { CardContentUI } from "../card/card";
import { TypographyUI } from "../typography/typography";
import { ButtonProps } from "@mui/material";
import { ThemeColor } from "../../../../../../apps/front/src/presentation/providers/theme/theme";

type ContentUIProps = {
  titulo: string;
  tituloBoton: string;
  subtitulo: string;
  icono: SvgIconComponent;
  iconoBoton: SvgIconComponent;
  backgroundColorBoton?: string;
  hoverColorBoton?: string;
  sx?: object;
  children: ReactNode;
  isMediaQuery?: boolean;
} & ButtonProps;

export const ContentUI = (props: ContentUIProps) => {
  const {
    titulo,
    subtitulo,
    icono: Icono,
    sx,
    children,
    tituloBoton,
    iconoBoton: IconButton,
    backgroundColorBoton,
    hoverColorBoton,
    ...rest
  } = props;
  const theme = ThemeColor();

  return (
    <CardContentUI
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        ...sx,
      }}
    >
      <BoxUI
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BoxUI>
          <BoxUI
            sx={{
              display: "flex",
            }}
          >
            <Icono />
            <TypographyUI
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                paddingLeft: "12px",
                color: theme?.primary.dark,
              }}
            >
              {titulo}
            </TypographyUI>
          </BoxUI>
          <TypographyUI
            sx={{
              fontSize: "11px",
              paddingLeft: "35px",
              paddingBottom: "10px",
              color: theme?.text.secondary,
            }}
          >
            {subtitulo}
          </TypographyUI>
        </BoxUI>
        {tituloBoton && (
          <ButtonActionResponseUI
            {...rest}
            text={tituloBoton}
            startIcon={<IconButton />}
            size="small"
            sx={{ height: "30px" }}
            backgroundColor={backgroundColorBoton}
            backgroundHover={hoverColorBoton}
          />
        )}
      </BoxUI>
      <BoxUI sx={{ width: "100%" }}>{children}</BoxUI>
    </CardContentUI>
  );
};
