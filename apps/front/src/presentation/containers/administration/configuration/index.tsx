import { CompanyContainer } from "@/presentation/containers/administration/company/create";
import { OptionList } from "@/presentation/containers/administration/configuration/optionList";
import { TapConfiguration } from "@/presentation/containers/administration/configuration/tab";
import { useConfigurationStore } from "@/presentation/store/administration/configurations";
import { BoxUI, GridUI } from "@repo/ui";

export const ConfigurationContainer = () => {
  const { state } = useConfigurationStore();

  return (
    <BoxUI sx={{ width: "100%", height: "100%", display: "flex" }}>
      <OptionList />
      <GridUI sx={{ width: "80%", height: "100%", marginLeft: "10px" }}>
        {state === 1 ? (
          <TapConfiguration />
        ) : state === 2 ? (
          <CompanyContainer />
        ) : null}
      </GridUI>
    </BoxUI>
  );
};
