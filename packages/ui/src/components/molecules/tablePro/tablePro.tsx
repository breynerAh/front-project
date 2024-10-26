import { DataGridProps } from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";
import { TableUI } from "../../atoms/table/table";
import { BoxProps } from "@mui/material";
import { forwardRef } from "react";

type TableUIProps = {
  tableProps: DataGridProps;
  boxProps?: BoxProps;
};
export const TableProUI = forwardRef<HTMLDivElement, TableUIProps>(
  ({ tableProps, boxProps }, ref) => {
    return (
      <BoxUI {...boxProps} ref={ref}>
        <TableUI {...tableProps} />
      </BoxUI>
    );
  }
);
