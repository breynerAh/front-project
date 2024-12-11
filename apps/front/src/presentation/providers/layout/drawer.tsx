import React, { useEffect } from "react";
import { useDrawer } from "@/presentation/hooks/layout/drawer";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ThemeColor } from "../theme/theme";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export function DrawerLayout() {
  const { arrayMenu, iconMenu, media } = useDrawer();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const themeLocal = ThemeColor();
  const [openSubMenu, setOpenSubMenu] = React.useState<Record<number, boolean>>(
    {}
  );

  const handleClick = (id_menu: number) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [id_menu]: !prevState[id_menu],
    }));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!media) setOpen(false);
  }, [media]);

  return (
    <Box sx={{ display: "flex" }}>
      {media && (
        <AppBar position="fixed" open={open}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open
                ? { display: "none" }
                : {
                    color: "white",
                    marginLeft: "10px",
                    position: "absolute",
                    top: "20px",
                  },
            ]}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
      )}
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
            borderRight: `1px ${themeLocal.system.background} solid`,
            borderTop: `1px ${themeLocal.system.background} solid`,
            boxSizing: "border-box",
            color: "black",
            top: "80px",
            boxShadow:
              "#32325d14 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            "@media (min-width: 600px)": {
              minHeight: "40px",
            },
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ background: themeLocal.system.background }} />
        <List sx={{ padding: 0 }}>
          {arrayMenu?.map((option, index) => {
            return (
              <>
                <ListItem key={`key-${index + 1}`} sx={{ padding: "5px 10px" }}>
                  <ListItemButton
                    onClick={() => handleClick(option?.id_menu)}
                    sx={{
                      borderRadius: "5px",
                      ":hover": { background: themeLocal.text.lines },
                    }}
                  >
                    <ListItemIcon sx={{ color: themeLocal.text.secondary }}>
                      {iconMenu(index)}
                    </ListItemIcon>
                    <ListItemText
                      primary={option?.menu}
                      sx={{ color: themeLocal.text.secondary }}
                    />
                    {openSubMenu[option?.id_menu] ? (
                      <ExpandLess sx={{ color: themeLocal.text.secondary }} />
                    ) : (
                      <ExpandMore sx={{ color: themeLocal.text.secondary }} />
                    )}
                  </ListItemButton>
                </ListItem>

                {option?.submenu?.map((submenu) => {
                  return (
                    <Collapse
                      in={openSubMenu[option?.id_menu]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <ArrowRightIcon />
                          </ListItemIcon>
                          <ListItemText primary={submenu?.name} />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  );
                })}
              </>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
