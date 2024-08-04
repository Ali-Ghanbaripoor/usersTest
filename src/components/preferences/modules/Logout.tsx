import React from "react";
import * as Mui from "@mui/material";
import { Logout as LogoutIcon, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Api from "../../../api/Api";
import { endpoints } from "../../../api/Endpoints";
import { Toast } from "../../Toast";
import SimpleDialog from "../../Dialog";

type logoutProps = {
  logoutDialog?: any; //state.system.logoutDialog
  powerOffLoading?: any; //state.system.powerOffLoading
  logoutDialogTrue?: any; //(setIndications([["logoutDialog"], [true]]))
  logoutDialogFalse?: any; // (setIndications([["logoutDialog"], [false]]))
  authProvider?: any; //state.auth.access
};

const Logout: React.FC<logoutProps> = ({
  logoutDialog,
  powerOffLoading,
  logoutDialogTrue,
  logoutDialogFalse,
  authProvider,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const api = new Api(authProvider);

  /**
   * # Logout
   *
   * Deletes `jwt` keys from LocalStorage and set empty string to {@link Auth}
   * reducer state.
   */
  const logout = async (): Promise<any> => {
    const { uri, method } = endpoints.auth.logout;

    try {
      const logoutResult = await api.requestHandler(uri, method);
      return { logoutResult };
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  return (
    <>
      <Mui.ListItem>
        <Mui.ListItemButton onClick={() => logoutDialogTrue}>
          <Mui.ListItemIcon>
            <LogoutIcon color="error" />
          </Mui.ListItemIcon>
          <Mui.ListItemText>
            <Mui.Typography variant="h6" color="error">
              {t("login.logout")}
            </Mui.Typography>
          </Mui.ListItemText>
        </Mui.ListItemButton>
      </Mui.ListItem>

      <SimpleDialog
        open={logoutDialog}
        title={t("settings.logout.dialog.title")}
        content={t("settings.logout.dialog.content")!}
        agreeLabel={t("actions.agree")}
        ignoreLabel={t("actions.close")}
        agreeLoading={powerOffLoading}
        agreeIcon={<LogoutIcon />}
        ignoreIcon={<Close />}
        agree={() => logout()}
        ignore={() => logoutDialogFalse}
      />
    </>
  );
};

export default Logout;
