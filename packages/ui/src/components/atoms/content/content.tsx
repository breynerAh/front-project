import { SvgIconComponent } from "@mui/icons-material";
import { ReactNode } from "react";
import { ButtonActionResponseUI } from "../../molecules/buttonActionNew/buttonAction";
import { BoxUI } from "../box/box";
import { CardContentUI } from "../card/card";
import { TypographyUI } from "../typography/typography";
import { ButtonProps } from "@mui/material";

type ContentUIProps = {
  titulo: string;
  titleButton: string;
  subtitulo: string;
  icono: SvgIconComponent;
  iconoButton: SvgIconComponent;
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
    titleButton,
    iconoButton: IconButton,
    isMediaQuery,
    ...rest
  } = props;

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
                fontSize: "18px",
                fontWeight: "500",
                paddingLeft: "12px",
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
            }}
          >
            {subtitulo}
          </TypographyUI>
        </BoxUI>
        {titleButton && (
          <ButtonActionResponseUI
            {...rest}
            text={titleButton}
            startIcon={<IconButton />}
            size="small"
            sx={{ height: "30px" }}
            isMediaQuery={isMediaQuery}
          />
        )}
      </BoxUI>
      <BoxUI sx={{ width: "100%" }}>{children}</BoxUI>
    </CardContentUI>
  );
};
