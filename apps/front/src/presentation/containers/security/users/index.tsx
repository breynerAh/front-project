import useUser from "@/presentation/hooks/security/users";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { BoxUI, ContentUI, TransitionsModalUI } from "@repo/ui";
import UserList from "./list";
import CreateUser from "./modal/createUser";

export default function UserContainer() {
  const { theme, open, setOpen, handleOpen, control, errors, handleSubmit } =
    useUser();

  return (
    <BoxUI sx={{ height: "100%" }}>
      <ContentUI
        icono={PeopleAltOutlinedIcon}
        titulo="Usuarios y roles"
        subtitulo="Aquí podrás crear y dar accesos a todos los usuarios de tu empresa"
        tituloBoton="Crear usuario"
        iconoBoton={AddOutlinedIcon}
        backgroundColorBoton={theme.secondary.main}
        hoverColorBoton={theme.secondary.dark}
        children={<UserList />}
        onClick={handleOpen}
      />
      <TransitionsModalUI
        state={open}
        title="Nuevo usuario"
        iconoTituloModal={PersonAddAltOutlinedIcon}
        handleCloseModal={() => setOpen(false)}
        width="30vw"
        minWidth="300px"
        height="auto"
      >
        <CreateUser
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          theme={theme}
        />
      </TransitionsModalUI>
    </BoxUI>
  );
}
