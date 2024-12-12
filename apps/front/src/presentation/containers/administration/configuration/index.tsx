import { CompanyContainer } from "@/presentation/containers/administration/company/create";
import { OptionList } from "@/presentation/containers/administration/configuration/optionList";
import { TapConfiguration } from "@/presentation/containers/administration/configuration/tab";
import { useConfigurationStore } from "@/presentation/store/administration/configurations";
import { BoxUI, GridUI } from "@repo/ui";
import UserContainer from "../../security/users";

export const ConfigurationContainer = () => {
  const { state } = useConfigurationStore();

  return (
    <BoxUI
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* <GridUI sx={{ height: "100%" }}> */}
      <OptionList />
      {/* </GridUI> */}
      <GridUI sx={{ width: "100%", height: "68vh" }}>
        {state === 1 ? (
          <TapConfiguration />
        ) : state === 2 ? (
          <CompanyContainer />
        ) : state === 3 ? (
          <UserContainer />
        ) : null}
      </GridUI>
    </BoxUI>
  );
};
