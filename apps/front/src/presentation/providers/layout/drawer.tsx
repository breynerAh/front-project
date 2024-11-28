import { useDrawer } from "@/presentation/hooks/layout/drawer";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BoxUI } from "@repo/ui";

export function DrawerLayout() {
  const { arrayMenu, setOpen, open, iconMenu } = useDrawer();

  return (
    <Drawer open={open} onClose={() => setOpen(false)} variant="persistent">
      <BoxUI onClick={() => setOpen(false)}>
        <List>
          {arrayMenu?.map((option, index) => {
            return (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{iconMenu(index)}</ListItemIcon>
                  <ListItemText primary={option?.menu} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </BoxUI>
    </Drawer>
  );
}
