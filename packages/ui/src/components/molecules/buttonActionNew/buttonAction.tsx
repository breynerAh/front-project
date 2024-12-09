import {
  CircularProgress,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ButtonUI } from "../../atoms/button/button";
import { TypographyUI } from "../../atoms/typography/typography";
import { ButtonActionProps } from "./type";
import { ThemeColor } from "../../../../../../apps/front/src/presentation/providers/theme/theme";

export function ButtonActionResponseUI(props: ButtonActionProps) {
  const theme = useMediaQuery(useTheme().breakpoints.down("sm"));
  const themeProvider = ThemeColor();

  const {
    text,
    loading = false,
    isMediaQuery = theme,
    backgroundColor = themeProvider.primary.main,
    backgroundHover = themeProvider.primary.dark,
    textColor = themeProvider.system.background,
    ...rest
  } = props;

  return (
    <Tooltip title={!rest?.disabled ? text : ""} arrow>
      <ButtonUI
        {...rest}
        sx={{
          width: "auto",
          textTransform: "inherit",
          height: "36px",
          color: textColor,
          padding: rest?.size === "small" ? "4px 10px" : "6px 12px",
          backgroundColor: !rest?.disabled
            ? backgroundColor
            : themeProvider.text.disable,
          ...(isMediaQuery && {
            padding: 0,
            minWidth: "35px",
          }),
          ":hover": {
            background: backgroundHover,
          },
          ":disabled": {
            color: themeProvider.system.background,
          },
          "& .MuiButton-startIcon": {
            marginLeft: 0,
            marginRight: isMediaQuery ? 0 : "8px",
          },
          "& .MuiButton-endIcon": {
            marginLeft: 0,
            marginRight: isMediaQuery ? 0 : "8px",
          },
          ...rest.sx,
        }}
        {...(rest?.startIcon && {
          startIcon: !loading ? (
            rest?.startIcon
          ) : (
            <CircularProgress size={20} />
          ),
        })}
        {...(rest?.endIcon && {
          endIcon: !loading ? rest?.endIcon : <CircularProgress size={20} />,
        })}
      >
        <TypographyUI
          sx={{
            display: {
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 500,
              display: isMediaQuery ? "none" : "block",
              color: textColor,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            },
          }}
        >
          {text}
        </TypographyUI>
      </ButtonUI>
    </Tooltip>
  );
}
