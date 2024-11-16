import useUser from "@/presentation/hooks/security/users";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { BoxUI, ContentUI } from "@repo/ui";
import UserList from "./list";

export default function UserContainer() {
  const { theme } = useUser();

  return (
    <BoxUI sx={{ height: "100%" }}>
      <ContentUI
        icono={PeopleAltOutlinedIcon}
        titulo="Usuarios y roles"
        subtitulo="Aquí podrás crear y dar accesos a todos los usuarios de tu empresa"
        tituloBoton="Crear usuario"
        iconoBoton={AddOutlinedIcon}
        backgroundColorBoton={theme.button.create}
        hoverColorBoton={theme.button.hover}
        children={<UserList />}
      />
    </BoxUI>
  );
}
