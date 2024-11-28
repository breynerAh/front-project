import { GridActionsCellItem, GridRenderCellParams } from "@mui/x-data-grid";
import {
  GridColDef,
  GridUI,
  QuickSearchToolbar,
  StateButton,
  TableUI,
} from "@repo/ui";
import {
  ModeEditOutlined,
  ToggleOffOutlined,
  ToggleOnOutlined,
} from "@mui/icons-material";
import { ThemeColor } from "@/presentation/providers/theme/theme";

export default function UserList() {
  const theme = ThemeColor();
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
      headerName: "Nombre completo",
      headerAlign: "left",
      align: "left",
      flex: 3,
    },
    {
      field: "email",
      headerName: "Cargo",
      headerAlign: "center",
      align: "center",
      sortable: true,
      flex: 3,
    },
    {
      field: "email",
      headerName: "Rol",
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
    // import ToggleOffIcon from '@mui/icons-material/ToggleOff';
    {
      field: "actions",
      // headerName: "Acciones",
      headerAlign: "center",
      align: "center",
      type: "actions",
      sortable: true,
      flex: 0.5,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<ModeEditOutlined sx={{ color: theme.primary.main }} />}
          label="Edit"
          onClick={() => console.log("el chamo")}
          showInMenu={true}
        />,
        <GridActionsCellItem
          icon={
            params?.row?.estado ? (
              <ToggleOnOutlined sx={{ color: theme.success.main }} />
            ) : (
              <ToggleOffOutlined sx={{ color: theme.error.main }} />
            )
          }
          label={params?.row?.estado ? "Activar" : "Desactivar"}
          onClick={() => console.log("el chamo")}
          showInMenu={true}
        />,
      ],
    },
  ];

  return (
    <>
      <GridUI sx={{ height: "700px" }}>
        <TableUI
          columns={columns}
          // getRowId={(row) => row?.id}
          rows={[]}
          // loading={isLoading}
          slots={{ toolbar: QuickSearchToolbar }}
          // checkboxSelection
        />
      </GridUI>
    </>
  );
}
