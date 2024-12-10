import { FormCompany } from "@/presentation/containers/administration/company/create/form";
import { useCompany } from "@/presentation/hooks/administration/company/create";
import { ThemeColor } from "@/presentation/providers/theme/theme";
import { useIdStore } from "@/presentation/store/generic";
import {
  BusinessOutlined,
  ModeEditOutlined,
  ToggleOffOutlined,
  ToggleOnOutlined,
} from "@mui/icons-material";
import { GridActionsCellItem, GridRenderCellParams } from "@mui/x-data-grid";
import {
  GridColDef,
  GridUI,
  QuickSearchToolbar,
  StateButton,
  TableUI,
  TransitionsModalUI,
} from "@repo/ui";
import { FC } from "react";

export const ListCompany: FC = () => {
  const theme = ThemeColor();
  const { setId, id } = useIdStore();
  const { setOpen, open, data, isLoading, handleDelete } = useCompany();

  const columns: GridColDef[] = [
    {
      field: "identificationType",
      headerName: "Tipo de Documento",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "identificationNumber",
      headerName: "No. Documento",
      headerAlign: "right",
      align: "right",
      flex: 1.5,
    },
    {
      field: "fullName",
      headerName: "Nombre",
      headerAlign: "left",
      align: "left",
      flex: 3,
    },
    {
      field: "typeCompany",
      headerName: "Tipo de empresa",
      headerAlign: "right",
      align: "right",
      flex: 1.5,
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
            state={params?.row?.state === "ACTIVO" ? true : false}
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
      getActions: (params) => [
        <GridActionsCellItem
          icon={<ModeEditOutlined sx={{ color: theme.primary.main }} />}
          label="Edit"
          onClick={() => (setId(params?.row?.id), setOpen(true))}
          showInMenu={true}
        />,
        <GridActionsCellItem
          icon={
            params?.row?.state === "ACTIVO" ? (
              <ToggleOffOutlined sx={{ color: theme.error.main }} />
            ) : (
              <ToggleOnOutlined sx={{ color: theme.success.main }} />
            )
          }
          label={params?.row?.state === "ACTIVO" ? "Desactivar" : "Activar"}
          onClick={() =>
            handleDelete(
              params?.row?.id,
              params?.row?.state === "ACTIVO" ? 2 : 1
            )
          }
          showInMenu={true}
        />,
      ],
    },
  ];

  return (
    <div>
      <GridUI sx={{ height: "700px" }}>
        <TableUI
          columns={columns}
          getRowId={(row) => row?.id}
          rows={data || []}
          loading={isLoading}
          slots={{ toolbar: QuickSearchToolbar }}
          // checkboxSelection
        />
      </GridUI>
      <TransitionsModalUI
        width="auto"
        height="auto"
        overflow="auto"
        iconoTituloModal={BusinessOutlined}
        state={open}
        title={id ? "Actualizar empresa" : "Nueva empresa"}
        handleCloseModal={() => setOpen(false)}
      >
        <FormCompany />
      </TransitionsModalUI>
    </div>
  );
};
