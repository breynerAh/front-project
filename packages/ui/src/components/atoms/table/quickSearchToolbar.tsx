import { EditTwoTone, PowerSettingsNewOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  GridToolbarProps,
  GridToolbarQuickFilter,
  ToolbarPropsOverrides,
} from "@mui/x-data-grid";
import { BoxUI } from "../box/box";

export const QuickSearchToolbar: React.JSXElementConstructor<
  GridToolbarProps &
    ToolbarPropsOverrides & {
      selectedRows?: { id: number; [key: string]: string | number | boolean }[];
      handleDelete?: () => void;
      disabledPower?: boolean;
      name?: string;
      handleEdit?: () => void;
      detail?: boolean;
      doNotShowIconPowerSetting?: boolean;
      handleFilterChange?: (value: string) => void;
      filterValue?: string;
      notViewOrEdit?: boolean;
      disabled?: boolean;
    }
> = ({
  handleDelete,
  selectedRows,
  name,
  handleEdit,
  disabled,
  detail,
  doNotShowIconPowerSetting,
  handleFilterChange,
  filterValue,
  notViewOrEdit,
  disabledPower,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: disabled ? "space-between" : "flex-end",
        p: 0,
        pb: 0,
      }}
    >
      {disabled && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!notViewOrEdit && (
            <Tooltip title={detail ? "Ver detalles" : "Actualizar"}>
              <span>
                <IconButton
                  aria-label="Actualizar"
                  disabled={
                    (selectedRows?.length ?? 0) === 0 ||
                    (selectedRows?.length ?? 0) >= 2
                  }
                  onClick={handleEdit}
                >
                  {detail ? <VisibilityOutlinedIcon /> : <EditTwoTone />}
                </IconButton>
              </span>
            </Tooltip>
          )}
          {doNotShowIconPowerSetting ? null : (
            <Tooltip title={name}>
              <span>
                <IconButton
                  aria-label={name}
                  onClick={handleDelete}
                  disabled={
                    !handleDelete || selectedRows?.length === 0 || disabledPower
                  }
                >
                  <PowerSettingsNewOutlined />
                </IconButton>
              </span>
            </Tooltip>
          )}
        </Box>
      )}
      <BoxUI
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <GridToolbarQuickFilter
          size="small"
          placeholder="Buscar"
          onChange={(event) => handleFilterChange?.(event.target.value)}
          value={filterValue}
          InputProps={{
            endAdornment: (
              <IconButton
                disabled={!filterValue}
                onClick={() => handleFilterChange?.("")}
                size="small"
                sx={{ width: "30px" }}
              >
                {filterValue ? <CloseIcon fontSize="small" /> : null}
              </IconButton>
            ),
          }}
          sx={{
            mr: "10px",
            height: "36px",
            border: `1px solid rgba(0, 0, 0, 0.23)`,
            borderRadius: "5px",
            pb: 0,
            "&:hover": {
              border: `1px solid rgba(0, 0, 0, 0.5)`,
            },
            "& svg": {
              color: "#0000008F",
            },
            "::after": {
              width: "10px !important",
              border: "1px solid #0F719B",
            },
            "& .MuiInputBase-input": {
              p: 0,
              fontFamily: "Poppins",
              width: "200px",
              "&::placeholder": {
                color: "#00000099",
                opacity: 1,
                fontFamily: "Poppins",
              },
            },
            "& .MuiInputBase-root": {
              boxShadow: "none",
              height: "40px",
              width: "100%",
              padding: "0px 10px",
              "::before": {
                display: "none",
              },
            },
          }}
        />
      </BoxUI>
    </Box>
  );
};
