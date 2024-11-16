import {
  GridColDef,
  GridUI,
  QuickSearchToolbar,
  TableUI,
  TransitionsModalUI,
} from "@repo/ui";
import { FC } from "react";

export const ListCompany: FC<any> = ({ setOpen, open }) => {
  const columns: GridColDef[] = [
    {
      field: "tipoComprobante",
      headerName: "Tipo de Documento",
      headerAlign: "left",
      flex: 2,
    },
    {
      field: "nom_fuente",
      headerName: "No. Documento",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "cod_fuente",
      headerName: "Nombre",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      align: "center",
      sortable: true,
      flex: 0.8,
    },
    {
      field: "estado",
      headerName: "Estado",
      headerAlign: "center",
      align: "center",
      sortable: true,
      flex: 0.8,
    },
  ];
  return (
    <div>
      <GridUI sx={{ height: "700px" }}>
        <TableUI
          columns={columns}
          getRowId={(row) => row?.id}
          rows={[]}
          //   loading={isLoading}
          slots={{ toolbar: QuickSearchToolbar }}
          checkboxSelection
        />
      </GridUI>
      {/* <ModalUI open={true}>
        <>asdasd</>
      </ModalUI> */}
      <TransitionsModalUI
        state={open}
        title="asdad"
        handleCloseModal={() => setOpen(false)}
      >
        <>asdasd</>
      </TransitionsModalUI>
    </div>
  );
};
