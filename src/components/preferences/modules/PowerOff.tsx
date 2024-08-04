import React from "react";
import * as Mui from "@mui/material";
import { Close, PowerSettingsNew } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { endpoints } from "../../../api/Endpoints";
import { Toast } from "../../Toast";
import { CustomButton } from "../../ButtonController";
import SimpleDialog from "../../Dialog";

type poweroffProps = {
  api?: any;
  powerOffDialog?: any; //state.system.powerOffDialog
  powerOffLoading?: any; //state.system.powerOffLoading
  powerOffDialogTrue?: any; //dispatch(setIndications([["powerOffDialog"], [true]]))
  powerOffDialogOff?: any; //dispatch(setIndications([["powerOffDialog"], [false]]))
};

const PowerOff: React.FC<poweroffProps> = ({
  api,
  powerOffDialog,
  powerOffLoading,
  powerOffDialogTrue,
  powerOffDialogOff,
}): JSX.Element => {
  const { t } = useTranslation();

  /** # System Power Off */
  const systemPowerOff = async (): Promise<any> => {
    const { uri, method } = endpoints.system.shutdown;
    try {
      const powerResult: { success: boolean; data: any; status?: number } =
        await api.requestHandler(uri, method);
      return { powerResult };
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  return (
    <React.Fragment>
      <Mui.ListItem style={{ marginTop: "auto" }}>
        <Mui.ListItemText>{t("settings.powerOff")}</Mui.ListItemText>
        <CustomButton onClick={() => powerOffDialogTrue}>
          <PowerSettingsNew color="secondary" />
        </CustomButton>
      </Mui.ListItem>
      <SimpleDialog
        open={powerOffDialog}
        title={t("settings.powerOffDialog.title")}
        content={t("settings.powerOffDialog.content")!}
        agreeLabel={t("actions.shutDown")}
        ignoreLabel={t("actions.close")}
        agreeLoading={powerOffLoading}
        agreeIcon={<PowerSettingsNew />}
        ignoreIcon={<Close />}
        agree={() => systemPowerOff()}
        ignore={() => powerOffDialogOff}
      />
    </React.Fragment>
  );
};

export default PowerOff;
