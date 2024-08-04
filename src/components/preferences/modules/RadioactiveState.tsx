import { Grid, Switch, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { endpoints } from "../../../api/Endpoints";
import { Toast } from "../../Toast";

type radioactiveStateProps = {
  api?: any;
  radioactiveStatus?: any; //store.system
  radioactiveStatusLoading?: any; //store.system
};

/**
 * Radioactive module
 *
 * With this module you can check power state of "Radioactive" and you can turn
 * it off or on.
 *
 * __NOTE__: Users without token can't use this section.
 */
const RadioactiveState = ({
  api,
  radioactiveStatus,
  radioactiveStatusLoading,
}: radioactiveStateProps) => {
  const { t } = useTranslation();

  const updatePowerState = async () => {
    const { uri, method } = endpoints.radioactive.powerSwitch;
    try {
      const result: { success: boolean } = await api.requestHandler(
        uri,
        method
      );
      return { result };
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  const getRecentState = async () => {
    const { uri, method } = endpoints.radioactive.powerStatus;
    try {
      const result: { success: boolean; data: { is_on: boolean } } =
        await api.requestHandler(uri, method);
      return { result };
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  React.useEffect(() => {
    getRecentState();
  }, []);

  const radioactivePowerStateLabel: string = t(
    `radioactive.powerState.${radioactiveStatus ? "off" : "on"}`
  );

  return (
    <Grid
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mx: "15px", my: "20px" }}
    >
      <Typography variant="h6">{radioactivePowerStateLabel}</Typography>
      <Switch
        color="secondary"
        checked={radioactiveStatus}
        onChange={() => updatePowerState()}
        disabled={radioactiveStatusLoading}
      />
    </Grid>
  );
};

export default RadioactiveState;
