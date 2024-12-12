import useUser from "@/presentation/hooks/security/users";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { BoxUI, CardUI, ContentUI, TransitionsModalUI } from "@repo/ui";
import UserList from "./list";
import CreateUser from "./modal/createUser";

export default function UserContainer() {
  const {
    theme,
    open,
    setOpen,
    handleOpen,
    control,
    errors,
    handleSubmit,
    handleUpdate,
    dataGetAllCompany,
    dataGetAllRol,
    dataGetAllCargo,
    dataGetAllIdentificationType,
    isPending,
    isPendingUpdate,
    userId,
    handleDelete,
  } = useUser();

  return (
    <BoxUI sx={{ minWidth: "350px" }}>
      <ContentUI
        icono={PeopleAltOutlinedIcon}
        titulo="Usuarios y roles"
        subtitulo="Aquí podrás crear y dar accesos a todos los usuarios de tu empresa"
        tituloBoton="Crear usuario"
        iconoBoton={AddOutlinedIcon}
        backgroundColorBoton={theme.secondary.main}
        hoverColorBoton={theme.secondary.dark}
        children={
          <CardUI
            sx={{
              paddingTop: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              height: "70vh",
            }}
          >
            <UserList handleDelete={handleDelete} />
          </CardUI>
        }
        onClick={handleOpen}
      />
      <TransitionsModalUI
        state={open}
        title={!userId ? "Nuevo usuario" : "Editar usuario"}
        iconoTituloModal={PersonAddAltOutlinedIcon}
        handleCloseModal={() => setOpen(false)}
        width="30vw"
        minWidth="300px"
        height="auto"
        overflow="auto"
      >
        <CreateUser
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          theme={theme}
          dataGetAllCompany={dataGetAllCompany}
          dataGetAllRol={dataGetAllRol}
          dataGetAllCargo={dataGetAllCargo}
          dataGetAllIdentificationType={dataGetAllIdentificationType}
          isPending={isPending}
          isPendingUpdate={isPendingUpdate}
          userId={userId}
        />
      </TransitionsModalUI>
    </BoxUI>
  );
}
