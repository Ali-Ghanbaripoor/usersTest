import * as Mui from "@mui/material";
import {
  Close,
  Key,
  NotificationsOutlined,
  Remove,
  SettingsOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CustomButton } from "../ButtonController";
import { AlarmCard } from "../Cards";
import config from "../../config/config";
import { PrivilegeHandler } from "../GroupsHandler";
import SwitchGender from "./modules/SwitchGender";
import Logout from "./modules/Logout";
import PowerOff from "./modules/PowerOff";
import TimeClock from "./modules/TimeClock";
import ApplicationsVersion from "./modules/Version";
import RadioactiveState from "./modules/RadioactiveState";
import { Anchor } from "../../@types/global";

type MomentHeaderProps = {
  clearAlarmsMethod?: any; //dispatch(clearAlarms("alarms"))
  featureSetting?: any; //state.system.features.settings
  Direction?: any; // state.changeLocale.direction
  alarmMessages?: any; // state.alarms.message
  accountingInfo?: any; // state.accounting
  ChangeLanguageComponent?: any;
};

/**
 * # Moment Header
 *
 * Main header, all pages contains this `row` header. This component demonstrate
 * **DateTime** and change language **dropdown**.
 *
 * ## Functionalities
 *
 * - {@link supportedLanguage}: Add another locale inside of this list
 * - {@link toggleDrawer}: Toggling @Mui drawer
 * - {@link momentUI}: Show now DateTime
 * - {@link settingsDrawerList}: Demonstrate list of `ListItem`
 * - {@link SwitchGender}: Users can apply gender type for operator
 * - {@link alarmsDrawerList}: Demonstrate list of Alarm Messages
 */
const MomentHeader = ({
  clearAlarmsMethod,
  featureSetting,
  Direction,
  alarmMessages,
  accountingInfo,
  ChangeLanguageComponent,
}: MomentHeaderProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [settingsDrawerState, setSettingsDrawerState] = React.useState<{
    [anchor in Anchor]: boolean;
  }>({
    right: false,
    left: false,
  });

  const [alarmsDrawerState, setAlarmsDrawerState] = React.useState<{
    [anchor in Anchor]: boolean;
  }>({
    right: false,
    left: false,
  });

  const direction: Anchor = Direction === "rtl" ? "left" : "right";

  /**
   * # Mui Toggle Drawer
   *
   * @param {Anchor} anchor - Which side you want open "left" | "right"
   * @param {boolean} open - Toggle open value
   */
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      // TODO: This not proper way, change and clean it.
      setSettingsDrawerState({ ...settingsDrawerState, [anchor]: open });
      setAlarmsDrawerState({ ...alarmsDrawerState, [anchor]: open });
    };

  /** # Actions Mui.Grid UI
   *
   * Performs important actions.
   *
   * ## Functionalities
   *
   * - Demonstrates System Alarms
   * - Demonstrates Application Settings
   */
  const actionsGrid: JSX.Element = (
    <Mui.Grid
      container
      flexDirection="row"
      justifyContent="end"
      width="80%"
      maxWidth="1128px"
    >
      <Mui.Grid item margin="5px">
        <Mui.Tooltip title={t("alarms.alarmsLabel")}>
          <CustomButton
            // TODO: Fix `toggleDrawer` function
            onClick={() =>
              setAlarmsDrawerState({ ...alarmsDrawerState, [direction]: true })
            }
          >
            <Mui.Badge badgeContent={alarmMessages.length} color="error">
              <NotificationsOutlined color="secondary" />
            </Mui.Badge>
          </CustomButton>
        </Mui.Tooltip>
      </Mui.Grid>

      <Mui.Grid item margin="5px">
        <Mui.Tooltip title={t("navbar.settings")}>
          <CustomButton
            // TODO: Fix `toggleDrawer` function
            disabled={featureSetting}
            onClick={() =>
              setSettingsDrawerState({
                ...settingsDrawerState,
                [direction]: true,
              })
            }
          >
            <SettingsOutlined color="secondary" />
          </CustomButton>
        </Mui.Tooltip>
      </Mui.Grid>
    </Mui.Grid>
  );

  /** # User Profile UI */
  const profileUI: JSX.Element = (
    <>
      <Mui.Box marginLeft="20px" marginTop="10px">
        <Mui.Typography variant="caption" color="primary">
          {t("settings.profile")}
        </Mui.Typography>
      </Mui.Box>
      <Mui.Grid
        container
        spacing={0.5}
        flexDirection="row"
        justifyContent="space-evenly"
        alignContent="center"
        marginTop="10px"
        marginBottom="10px"
      >
        <Mui.Grid item>
          <Mui.Avatar
            alt={accountingInfo.username[0] ?? ""}
            variant="circular"
            color="secondary"
            sx={{ width: "50px", height: "50px" }}
          >
            {accountingInfo.username[0] ?? ""}
          </Mui.Avatar>
        </Mui.Grid>
        <Mui.Grid item>
          <Mui.Typography variant="h5">
            {accountingInfo.f_name} {accountingInfo.l_name}
          </Mui.Typography>
          <Mui.Typography variant="h6">
            {accountingInfo.username}
          </Mui.Typography>
          <Mui.Typography variant="overline">
            {accountingInfo.phone ?? t("alarms.unknown")}
          </Mui.Typography>
          <Mui.Button
            variant="text"
            color="secondary"
            endIcon={<Key />}
            onClick={() => {
              navigate("/user/preferences/password");
              setSettingsDrawerState({
                ...settingsDrawerState,
                [direction]: false,
              });
            }}
          >
            {t("settings.userPreferences.edit.password.navigatedButton")}
          </Mui.Button>
        </Mui.Grid>
      </Mui.Grid>
    </>
  );

  /** Settings list
   *
   * - Changes Language defined here
   * - Logout from the Sightence system
   */
  const settingsDrawerList: JSX.Element = (
    <Mui.Grid
      sx={{ width: config.style.drawerSize }}
      role="presentation"
      flexDirection="row"
      height="100%"
    >
      <Mui.Grid
        container
        marginLeft="5px"
        padding="10px"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Mui.Typography
          variant="h6"
          color="secondary"
          align="center"
          alignSelf="center"
        >
          {t("navbar.settings")}
        </Mui.Typography>
        <Mui.IconButton
          onClick={() =>
            setSettingsDrawerState({
              ...settingsDrawerState,
              [direction]: false,
            })
          }
        >
          <Close color="secondary" />
        </Mui.IconButton>
      </Mui.Grid>

      <Mui.Divider />
      {location.pathname === "/login" ? <></> : React.Children.only(profileUI)}
      <ApplicationsVersion />
      <Mui.Divider />
      <Mui.List>
        <Mui.Box marginLeft="20px">
          <Mui.Typography variant="caption" color="primary">
            {t("language.language")}
          </Mui.Typography>
        </Mui.Box>
        {ChangeLanguageComponent}
        {/*
            Demonstrates it only after authorization and if user had `superuser`
            role.
        */}
        {location.pathname === "/login" ? (
          <></>
        ) : (
          <PrivilegeHandler.ComponentGroupsHandler
            currentRole={accountingInfo.role}
            supportedGroup="superuser"
          >
            <Mui.Divider />
            <Mui.Box marginLeft="20px">
              <Mui.Typography variant="caption" color="primary">
                {t("settings.userPreferences.title")}
              </Mui.Typography>
            </Mui.Box>
            <Mui.ListItem>
              <SwitchGender />
            </Mui.ListItem>
          </PrivilegeHandler.ComponentGroupsHandler>
        )}
        {location.pathname === "/login" ? (
          <React.Fragment />
        ) : (
          <Mui.Grid container>
            <RadioactiveState />
          </Mui.Grid>
        )}
        <Mui.Grid container>
          <PowerOff />
        </Mui.Grid>
        {location.pathname === "/login" ? <></> : <Logout />}
      </Mui.List>
    </Mui.Grid>
  );

  /** # Alarms Drawer List
   *
   * Returns list of Alarm messages.
   */
  const alarmsDrawerList: JSX.Element = (
    <Mui.Box sx={{ width: config.style.drawerSize }} role="alert">
      <Mui.Grid
        container
        margin="5px"
        padding="10px"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Mui.Typography
          variant="h6"
          color="error"
          align="center"
          alignSelf="center"
        >
          {t("alarms.alarmsLabel")}
        </Mui.Typography>
        <Mui.IconButton
          onClick={() =>
            setAlarmsDrawerState({ ...alarmsDrawerState, [direction]: false })
          }
        >
          <Close color="secondary" />
        </Mui.IconButton>
      </Mui.Grid>
      <Mui.Divider />
      {alarmMessages.length === 0 ? (
        <></>
      ) : (
        <Mui.List>
          <Mui.Button
            onClick={() => clearAlarmsMethod}
            color="secondary"
            style={{ margin: "5px" }}
            endIcon={<Remove color="secondary" />}
          >
            {t("alarms.clear")}
          </Mui.Button>
        </Mui.List>
      )}
      <Mui.List>
        {React.Children.toArray(
          alarmMessages.map((message: any) => (
            <React.Fragment>
              <Mui.ListItem>
                <AlarmCard
                  title={message.title}
                  content={message.content}
                  time={message.time}
                />
              </Mui.ListItem>
              <Mui.Divider />
            </React.Fragment>
          ))
        )}
      </Mui.List>
    </Mui.Box>
  );

  const settingsDrawer: JSX.Element = (
    <Mui.Drawer
      anchor={direction}
      open={settingsDrawerState[direction]}
      onClose={toggleDrawer(direction, false)}
    >
      {settingsDrawerList}
    </Mui.Drawer>
  );

  const alarmDrawer: JSX.Element = (
    <Mui.Drawer
      anchor={direction}
      open={alarmsDrawerState[direction]}
      onClose={toggleDrawer(direction, false)}
    >
      {alarmsDrawerList}
    </Mui.Drawer>
  );

  return (
    <Mui.Paper variant="elevation">
      <Mui.Grid
        container
        justifyContent="space-between"
        alignContent="center"
        alignSelf="center"
        alignItems="center"
      >
        <Mui.Grid
          item
          xs={4}
          alignSelf="center"
          alignItems="center"
          alignContent="center"
        >
          <TimeClock />
        </Mui.Grid>
        <Mui.Grid
          item
          xs={4}
          alignSelf="center"
          alignItems="center"
          alignContent="center"
        >
          {React.Children.only(actionsGrid)}
        </Mui.Grid>
        {React.Children.only(settingsDrawer)}
        {React.Children.only(alarmDrawer)}
      </Mui.Grid>
    </Mui.Paper>
  );
};

export default MomentHeader;
