import { ThemeColor } from "@/presentation/providers/theme/theme";
import { ArrowForwardIosOutlined, SvgIconComponent } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

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

  return (
    <ListItemButton
      style={{
        color: state === index ? theme.primary.dark : theme.primary.main,
        backgroundColor: state === index ? "#f5f5f5" : "white",
      }}
      onClick={onClick}
    >
      <ListItemIcon
        style={{
          color: state === index ? theme.primary.dark : theme.primary.main,
        }}
      >
        <Icono />
      </ListItemIcon>
      <ListItemText primary={title} />
      <ArrowForwardIosOutlined
        sx={{
          width: "15px",
          color: state === index ? theme.primary.dark : theme.primary.main,
        }}
      />
    </ListItemButton>
  );
};
