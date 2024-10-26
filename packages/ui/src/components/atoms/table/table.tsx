import { forwardRef } from "react";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

export const TableUI = forwardRef<HTMLDivElement, DataGridProps>((props, ref) => {
  return <DataGrid ref={ref} {...props} />
});
