import { ItemList } from "@/presentation/containers/administration/configuration/itemList";
import { useUserConfiguration } from "@/presentation/hooks/administration/configuration";
import { useConfigurationStore } from "@/presentation/store/administration/configurations";
import {
  BusinessOutlined,
  CategoryOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Avatar, List, ListSubheader, Paper } from "@mui/material";
import { GridUI, TypographyUI } from "@repo/ui";

export const OptionList = () => {
  const { state, setState } = useConfigurationStore();
  const { dataGetByIdUser } = useUserConfiguration();
  return (
    <Paper
      style={{
        padding: "20px 0px 20px 0px",
        width: "20%",
        height: "70vh",
        marginTop: "72px",
        borderRadius: "10px",
        // minWidth: "250px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "auto",
      }}
    >
      {/* Profile Picture Section */}
      <GridUI container spacing={3} sx={{}}>
        <GridUI
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          container
          direction="column"
          alignItems="center"
        >
          <Avatar
            style={{ width: 80, height: 80 }}
            src="https://via.placeholder.com/100"
            alt="Profile Picture"
          />
        </GridUI>
        <GridUI item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <TypographyUI variant="body1">
            {dataGetByIdUser?.persons?.fullName?.toUpperCase()}
          </TypographyUI>
          <TypographyUI variant="caption">
            {dataGetByIdUser?.persons?.cargo?.name?.toUpperCase()}
          </TypographyUI>
        </GridUI>
      </GridUI>
      <GridUI item xs={12} sx={{ width: "100%" }}>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ fontSize: "16px" }}
            >
              Configuración
            </ListSubheader>
          }
        >
          <ItemList
            onClick={() => setState(1)}
            icono={PersonOutlineOutlined}
            index={1}
            state={state}
            title="General"
          />
          {dataGetByIdUser?.userRole?.[0]?.idRole === 1 && (
            <>
              <ItemList
                onClick={() => setState(2)}
                icono={BusinessOutlined}
                index={2}
                state={state}
                title="Lista de empresas"
              />
              <ItemList
                onClick={() => setState(3)}
                icono={PeopleAltOutlined}
                index={3}
                state={state}
                title="Lista de usuarios"
              />
              <ItemList
                onClick={() => setState(4)}
                icono={CategoryOutlined}
                index={4}
                state={state}
                title="Lista de categorías"
              />
            </>
          )}
        </List>
      </GridUI>
    </Paper>
  );
};
