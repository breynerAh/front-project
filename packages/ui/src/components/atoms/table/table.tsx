import { Box } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { forwardRef, useEffect, useState } from "react";
// import { useDebouncedCallback } from "use-debounce";

interface TableUIProps extends DataGridProps {
  pageSize?: number;
}

export const CustomNoRowsOverlay = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins",
        fontWeight: 500,
      }}
    >
      Sin filas
    </Box>
  );
};

export const TableUI = forwardRef<HTMLDivElement, TableUIProps>(
  ({ pageSize = 20, ...props }, ref) => {
    // const [filterValue, setFilterValue] = useState("");
    const [debouncedFilterValue, setDebouncedFilterValue] = useState("");
    const [filteredRows, setFilteredRows] = useState(props.rows || []);

    // Callback debounced para manejar el cambio en el filtro
    // const filterTimeValue = useDebouncedCallback((value: string) => {
    //   setDebouncedFilterValue(!filterValue ? filterValue : value);
    // }, 500);

    const removeAccents = (value: string) => {
      return value
        ?.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\./g, "");
    };

    // const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const value = event?.target?.value || "";
    //   setFilterValue(value);
    //   if (value) {
    //     filterTimeValue(value);
    //   } else {
    //     setDebouncedFilterValue("");
    //   }
    // };

    // Filtrar las filas cuando debouncedFilterValue cambia
    useEffect(() => {
      if (debouncedFilterValue) {
        const newFilteredRows = props?.rows?.filter((row) => {
          return props?.columns?.some((column) => {
            const cellValue = removeAccents(
              row[column?.field]?.toString() || ""
            )?.toLowerCase();
            const searchValue =
              removeAccents(debouncedFilterValue)?.toLowerCase();
            return cellValue?.includes(searchValue);
          });
        });
        setFilteredRows(newFilteredRows || []);
      } else {
        setDebouncedFilterValue("");
        setFilteredRows(props?.rows || []);
      }
    }, [debouncedFilterValue, props?.rows, props?.columns]);

    useEffect(() => {
      if (!filteredRows && debouncedFilterValue) {
        setDebouncedFilterValue("");
      }
    }, [filteredRows, debouncedFilterValue]);

    return (
      <DataGrid
        ref={ref}
        {...props}
        rows={filteredRows}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        slots={{
          ...props?.slots,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        density={props?.density || "compact"}
        slotProps={{
          ...props?.slotProps,
          toolbar: {
            ...props?.slotProps?.toolbar,
            // handleFilterChange,
          },
        }}
        sx={{
          ...props?.sx,
          border: "none",
          "&.MuiDataGrid-root": {
            "--unstable_DataGrid-radius": "0px",
          },
          ".MuiDataGrid-cell": {
            fontSize: "13px",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
      />
    );
  }
);
