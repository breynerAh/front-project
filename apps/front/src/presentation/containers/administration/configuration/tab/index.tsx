import { FormCompany } from "@/presentation/containers/administration/company/create/form";
import { PersonalInformation } from "@/presentation/containers/administration/configuration/tab/Content/personalInformation";
import { useTabConfigurationStore } from "@/presentation/store/administration/configurations";
import { AddOutlined, GroupOutlined } from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import { BoxUI, CardUI, ContentUI } from "@repo/ui";
import React, { FC } from "react";

export const TapConfiguration: FC = () => {
  const { setValues, values } = useTabConfigurationStore();

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (values !== newValue) {
      setValues(newValue); // Cambia el tab seleccionado
    }
  };

  return (
    <ContentUI
      icono={GroupOutlined}
      titulo="Información Personal"
      subtitulo="Aquí podrás ver y editar tu información personal"
      iconoBoton={AddOutlined}
    >
      <CardUI
        sx={{
          padding: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          height: "70vh",
          overflow: "auto",
        }}
      >
        <BoxUI
          sx={{
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%", padding: "0px 0px 0px" }}>
            <Tabs
              value={values === null ? false : values}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Información general" {...a11yProps(0)} />
              <Tab label="Información de la empresa" {...a11yProps(1)} />
            </Tabs>
            <BoxUI
              sx={{
                display: values === 0 ? "flex" : "none",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                padding: "0px 5.1px 0px",
              }}
            >
              <PersonalInformation />
            </BoxUI>
            <BoxUI
              sx={{
                display: values === 1 ? "flex" : "none",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                padding: "0px 5.1px 0px",
              }}
            >
              <FormCompany />
            </BoxUI>
          </Box>
        </BoxUI>
      </CardUI>
    </ContentUI>
  );
};
