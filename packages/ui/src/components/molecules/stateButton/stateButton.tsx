import { Grid } from "@mui/material";
import { TStateButton } from "./types.d";
import { TypographyUI } from "../../atoms/typography/typography";
import { BoxUI } from "../../atoms/box/box";

export const StateButton: React.FC<TStateButton> = ({
  state,
  label,
  statePending,
}) => {
  const colors = {
    success: {
      main: "#005A26",
      light: "#BFF377",
    },
    error: {
      main: "#D00042",
      light: "#FFBDBB",
    },
    pending: {
      main: "#FFEF92",
      dark: "#C76300",
    },
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90px",
        height: "24px",
        borderRadius: "100px",
        padding: "3px 4px 3px 4px",
        backgroundColor: statePending
          ? colors.pending.main
          : state && !statePending
          ? colors.success.light
          : colors.error.light,
        color: statePending
          ? colors.pending.dark
          : state && !statePending
          ? colors.success.main
          : colors.error.main,
      }}
    >
      <BoxUI sx={{ width: "90%", display: "flex", justifyContent: "center" }}>
        <TypographyUI
          sx={{
            fontSize: "13px",
            fontWeight: 400,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {label}
        </TypographyUI>
      </BoxUI>
    </Grid>
  );
};
