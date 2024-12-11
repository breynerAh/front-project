import { ListCompany } from "@/presentation/containers/administration/company/create/list";
import { useCompany } from "@/presentation/hooks/administration/company/create";
import { AddOutlined, GroupOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { CardUI, ContentUI } from "@repo/ui";
export function CompanyContainer() {
  const { handleOpen } = useCompany();
  return (
    <ContentUI
      icono={GroupOutlined}
      titulo="Empresas"
      subtitulo="Aquí podrás crear una empresa"
      tituloBoton="Crear empresa"
      iconoBoton={AddOutlined}
      onClick={handleOpen}
      isMediaQuery={useMediaQuery("(max-width:980px)")}
    >
      <CardUI
        sx={{
          paddingTop: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          height: "70vh",
        }}
      >
        <ListCompany />
      </CardUI>
    </ContentUI>
  );
}
