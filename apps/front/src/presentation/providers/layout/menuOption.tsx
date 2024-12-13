import { useMenuOptions } from "@/presentation/hooks/layout/menuOptios";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BoxUI, TypographyUI } from "@repo/ui";
import { Link } from "react-router-dom";

export function MenuOptions() {
  const {
    arrayMenu,
    submenuAnchorEl,
    selectedSubmenu,
    anchorEls,
    handleClickMenu,
    handleClose,
    handleOpenSubmenu,
    handleCloseSubmenu,
  } = useMenuOptions();

  return (
    <>
      {arrayMenu?.map((x) => (
        <BoxUI
          key={x?.id}
          sx={{
            display: "flex",
            color: "white",
            width: "30%",
            padding: "5px",
          }}
        >
          <TypographyUI
            sx={{
              cursor: "pointer",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "14px",
            }}
            id={x?.id?.toString()}
            aria-controls={anchorEls[x?.id] ? `menu-${x?.id}` : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEls[x?.id] ? "true" : undefined}
            onClick={(e) => handleClickMenu(e, x?.id)}
          >
            {x?.name}
            {x?.subModules && <ExpandMoreIcon />}
          </TypographyUI>
          {x?.subModules?.length ? (
            <Menu
              id={`menu-${x?.id}`}
              anchorEl={anchorEls[x?.id]}
              open={Boolean(anchorEls[x?.id])}
              onClose={() => handleClose(x?.id)}
              MenuListProps={{
                "aria-labelledby": x?.id?.toString(),
              }}
              sx={{
                "& .MuiMenu-paper": {
                  width: "200px",
                  minHeight: "500px",
                },
                top: "30px",
              }}
            >
              {x?.subModules?.map((y) => (
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                  }}
                  key={y?.id}
                  // onClick={() => handleClose(menu?.id_menu)}
                  onClick={(e) => handleOpenSubmenu(e, y.menu)}
                >
                  {y?.name}
                  <ArrowForwardIosOutlined
                    sx={{ width: "15px", color: "gray" }}
                  />
                </MenuItem>
              ))}
            </Menu>
          ) : null}
        </BoxUI>
      ))}
      {selectedSubmenu && (
        <Menu
          anchorEl={submenuAnchorEl}
          open={Boolean(submenuAnchorEl)}
          // onMouseMove={handleCloseSubmenu}
          onClose={handleCloseSubmenu}
          sx={{
            "& .MuiMenu-paper": {
              width: "200px",
              minHeight: "500px",
            },
            left: "205px",
          }}
        >
          {selectedSubmenu?.map((x) => (
            <Link to={x?.url}>
              <MenuItem
                key={x?.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                }}
              >
                {x?.name}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      )}
    </>
  );
}
