import { AddOutlined, GroupOutlined } from "@mui/icons-material";
import { CardUI, ContentUI } from "@repo/ui";
export function CompanyContainer() {
  return (
    <ContentUI
      icono={GroupOutlined}
      titulo="Empresas"
      subtitulo="Aquí podrás crear una empresa"
      titleButton="Crear empresa"
      iconoButton={AddOutlined}
      onClick={() => console.log("click")}
    >
      <CardUI>Ejemplo</CardUI>
    </ContentUI>
  );
}
