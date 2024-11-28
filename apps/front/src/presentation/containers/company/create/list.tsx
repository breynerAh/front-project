import { FormCompany } from "@/presentation/containers/company/create/form";
import { useCompany } from "@/presentation/hooks/administration/company/create";
import { ThemeColor } from "@/presentation/providers/theme/theme";
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
  const { setOpen, open, data, isLoading } = useCompany();
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
        width="70%"
        height="auto"
        overflow="auto"
        iconoTituloModal={BusinessOutlined}
        state={open}
        title="Nueva empresa"
        handleCloseModal={() => setOpen(false)}
      >
        <FormCompany />
      </TransitionsModalUI>
    </div>
  );
};
