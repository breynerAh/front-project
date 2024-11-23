import { FormCompany } from "@/presentation/containers/company/create/form";
import { AddOutlined } from "@mui/icons-material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import {
  GridColDef,
  GridUI,
  QuickSearchToolbar,
  StateButton,
  TableUI,
  TransitionsModalUI,
} from "@repo/ui";
import { FC } from "react";

export const ListCompany: FC<any> = ({ setOpen, open, data }) => {
  const columns: GridColDef[] = [
    {
      field: "idIdentificationType",
      headerName: "Tipo de Documento",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "identificationNumber",
      headerName: "No. Documento",
      headerAlign: "right",
      align: "right",
      flex: 2,
    },
    {
      field: "fullName",
      headerName: "Nombre",
      headerAlign: "left",
      align: "left",
      flex: 3,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      align: "center",
      sortable: true,
      flex: 3,
    },
    {
      field: "estado",
      headerName: "Estado",
      headerAlign: "center",
      align: "center",
      sortable: true,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <StateButton
            state={params?.row?.state === "Activo" ? true : false}
            label={params?.row?.state}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <GridUI sx={{ height: "700px" }}>
        <TableUI
          columns={columns}
          getRowId={(row) => row?.id}
          rows={data || []}
          //   loading={isLoading}
          slots={{ toolbar: QuickSearchToolbar }}
          checkboxSelection
        />
      </GridUI>
      {/* <ModalUI open={true}>
        <>asdasd</>
      </ModalUI> */}
      <TransitionsModalUI
        width="80%"
        // height="100%"
        state={open}
        title="Nueva empresa"
        handleCloseModal={() => setOpen(false)}
      >
        <FormCompany />
      </TransitionsModalUI>
    </div>
  );
};
