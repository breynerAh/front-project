import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BoxUI, ButtonUI, TypographyUI } from "@repo/ui";
// import { useNavigate } from "react-router-dom";

export function MenuLayout() {
  // const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BoxUI sx={{ width: 250, height: "100%" }} role="presentation">
      <BoxUI
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <TypographyUI sx={{ color: "white" }}>Principal</TypographyUI>
        <BoxUI>
          <ButtonUI
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Biblioteca
          </ButtonUI>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </BoxUI>
      </BoxUI>
    </BoxUI>
  );
}
