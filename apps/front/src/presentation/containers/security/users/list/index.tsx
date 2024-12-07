import useUserList from "@/presentation/hooks/security/users/list";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import {
  ModeEditOutlined,
  ToggleOffOutlined,
  ToggleOnOutlined,
} from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import { GridActionsCellItem, GridRenderCellParams } from "@mui/x-data-grid";
import {
  GridColDef,
  GridUI,
  QuickSearchToolbar,
  StateButton,
  TableUI,
} from "@repo/ui";
export default function UserList() {
  const theme = ThemeColor();
  const { dataGetAllUser, isLoading, editUser } = useUserList();

  const columns: GridColDef[] = [
    {
      field: "identificationType",
      headerName: "Tipo de Documento",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "document",
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
      field: "position",
      headerName: "Cargo",
      headerAlign: "left",
      align: "left",
      sortable: true,
      flex: 2,
    },
    {
      field: "rol",
      headerName: "Rol",
      headerAlign: "center",
      align: "center",
      sortable: true,
      flex: 2,
      renderCell: (params) => {
        return (
          <div
            style={{
              width: "100%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Stack spacing={1}>
              {params.value.map((tag: string) => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </Stack>
          </div>
        );
      },
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
    {
      field: "actions",
      // headerName: "Acciones",
      headerAlign: "center",
      align: "center",
      type: "actions",
      sortable: true,
      flex: 0.5,
      getActions: (params) => {
        return [
          <GridActionsCellItem
            icon={<ModeEditOutlined sx={{ color: theme.primary.main }} />}
            label="Editar"
            onClick={() => editUser(params?.row?.id)}
            showInMenu={true}
          />,
          <GridActionsCellItem
            icon={
              params?.row?.state?.toLowerCase() !== "activo" ? (
                <ToggleOnOutlined sx={{ color: theme.success.main }} />
              ) : (
                <ToggleOffOutlined sx={{ color: theme.error.main }} />
              )
            }
            label={
              params?.row?.state?.toLowerCase() !== "activo"
                ? "Activar"
                : "Desactivar"
            }
            onClick={() => console.log("el chamo")}
            showInMenu={true}
          />,
        ];
      },
    },
  ];

  return (
    <>
      <GridUI sx={{ height: "700px" }}>
        <TableUI
          columns={columns}
          getRowId={(row) => row?.id}
          rows={dataGetAllUser || []}
          loading={isLoading}
          slots={{ toolbar: QuickSearchToolbar }}
          // checkboxSelection
        />
      </GridUI>
    </>
  );
}
