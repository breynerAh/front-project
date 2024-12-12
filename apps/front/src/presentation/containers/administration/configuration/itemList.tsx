import { ThemeColor } from "@/presentation/providers/theme/theme";
import { ArrowForwardIosOutlined, SvgIconComponent } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type ItemListProps = {
  title: string;
  state: number;
  index: number;
  onClick: () => void;
  icono: SvgIconComponent;
};

export const ItemList = (props: ItemListProps) => {
  const theme = ThemeColor();
  const { icono: Icono, index, onClick, state, title } = props;
  const mediaQuery = useMediaQuery(useTheme().breakpoints.down("lg"));

  return (
    <Tooltip title={mediaQuery ? title : ""} arrow>
      <ListItemButton
        sx={{
          color: state === index ? theme.primary.dark : theme.primary.main,
          backgroundColor: state === index ? "#f5f5f5" : "white",
          ":hover": { background: theme.text.lines },
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <ListItemIcon
          style={{
            color: state === index ? theme.primary.dark : theme.primary.main,
            justifyContent: mediaQuery ? "center" : "none",
            padding: "0",
          }}
        >
          <Icono />
        </ListItemIcon>
        {mediaQuery ? null : (
          <ListItemText
            primaryTypographyProps={{
              fontSize: "14px",
            }}
            primary={title}
          />
        )}
        <ArrowForwardIosOutlined
          sx={{
            width: "15px",
            color: state === index ? theme.primary.dark : theme.primary.main,
          }}
        />
      </ListItemButton>
    </Tooltip>
  );
};
