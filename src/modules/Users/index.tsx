import {
  Alert,
  CircularProgress,
  Grid,
  Fab,
  IconButton,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Add,
  Close,
  Delete,
  Fingerprint,
  LayersClear,
  Edit,
} from "@mui/icons-material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../api/Endpoints";
import FingerprintDialogComponent from "../../components/Fingerprint";
import Table from "../../components/Table";
import { Toast } from "../../components/Toast";
import { Users, UserData } from "./interface";
import SimpleDialog from "../../components/Dialog";
import { Time } from "../../utils/time";
import Api from "../../api/Api";
import { FingerprintCondition } from "../../@types/global";

/**
 * # Users View
 *
 * User Manipulation, Edit, Update, active and inactive and remove a user can
 * happen from this view.
 *
 * ## Functionalities
 *
 * - {@link usersPreparation}
 * - {@link userDataTableNormalizer}
 *
 * ## UI
 *
 * - {@link usersTable}
 * - SimpleDialog: Needs to change if number of actions increased
 *
 */
const UsersScreen: React.FC<UsersScreen> = ({
  access,
  t,
  removeTooltipLabelHandler,
  fingerprint_available,
  deleteUserHandler,
  UsersList,
  usersListLoad,
  usersListEmpty,
  usersListFailureFetch,
  removalUserFingersDialog,
  removalUserFingersDialogDispatch,
  removalUserId,
  removeFingersLoad,
  removalUserDialogValue,
  removeUserLoad,
  removalUserDialogDispatch,
  lastSelectedFingerprintCondition,
  lastSelectedFingerprintUserId,
}): JSX.Element => {
  const navigate = useNavigate();
  const api = new Api(access!);

  /**
   * # Users Preparation
   *
   * Gets List of users.
   */
  const usersPreparation = async (): Promise<any> => {
    const { uri, method } = endpoints.users.getUsers;
    try {
      const usersList: Users = await api.requestHandler(uri, method);
      return usersList;
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  /**
   * # User Removal
   *
   * @param {string} userId - An user object id
   */
  const userRemoval = async (userId: string): Promise<any> => {
    const { uri, method } = endpoints.users.deleteUser;
    try {
      const removeUserResult: {
        success: boolean;
        data: string;
        status: number;
      } = await api.requestHandler(`${uri}?id=${userId}`, method);
      return {removeUserResult};
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  /**
   * # User View
   *
   * Navigates to modification users view.
   *
   * @param {string} userId - An user object id
   */
  const userView = (userId: string) =>
    navigate(`/users/modifications/${userId}`);

  /**
   * # Fingerprints Advertise
   *
   * Based on user conditions. We know we have three type of user fingerprint
   * condition: "register" | "change" | "delete". This function will send proper
   * condition based on user object id to related endpoint.
   *
   * At first time of user registration, an user need to "register" a
   * fingerprint. After delete user fingerprint, again it will need to send
   * condition value as "register". After register user fingerprint condition
   * will change to "change" type.
   *
   * @default "register"
   * @param {FingerprintCondition} condition - User fingerprint conditions
   * @param {string} userId - Mongo object id
   */
  const fingerprintAdvertise = async (
    condition: FingerprintCondition,
    userId: string
  ): Promise<any> => {
    const { uri, method } = endpoints.users.fingerprintCondition;
    try {
      const fingerprintAdvertiseResult: {
        success: boolean;
        data: string;
        status: number;
      } = await api.requestHandler(`${uri}?id=${userId}`, method, {
        condition: condition,
      });
      return {fingerprintAdvertiseResult}
    } catch (e: any) {
      Toast(e, "warning");
    }
  };

  /**
   * # User Fingerprint Removal
   *
   * @param {string} userId
   */
  const userFingerprintCollectionRemoval = async (
    userId: string
  ): Promise<any> => {
    const { uri, method } = endpoints.users.fingerprintCondition;

    try {
      const userFingerprintRemovalResult: {
        success: boolean;
        data: string;
        status: number;
      } = await api.requestHandler(`${uri}?id=${userId}`, method, {
        condition: "delete" as FingerprintCondition,
      });
      return {userFingerprintRemovalResult}
    } catch (e: any) {
      Toast(e, "warning");
    }
  };

  /**
   * # User Data Table Normalizer
   */
  const userDataTableNormalizer = (usersList: UserData[]): any[][] => {
    const data: any[][] = [
      [
        "row",
        "firstName",
        "lastName",
        "role",
        "username",
        "phone",
        "createdAt",
        "lastUpdate",
        "actions",
      ],
    ];

    usersList.map((user: UserData, index: number) =>
      data.push([
        index + 1,
        user.f_name,
        user.l_name,
        user.role,
        user.username,
        user.phone,
        Time.normalizeUTCToStandard8601(user.created_at),
        Time.normalizeUTCToStandard8601(user.updated_at),
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Tooltip title={t("usersView.fingerprint.removeTooltipLabel")!}>
            <span>
              <IconButton
                onClick={() => removeTooltipLabelHandler}
                disabled={
                  // In first time of register, user can't able to remove
                  // fingerprint
                  user.condition === "delete" || user.condition === "register"
                    ? true
                    : false
                }
              >
                <LayersClear />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip
            title={
              user.condition === "delete"
                ? t("usersView.fingerprint.registerTooltipLabel")!
                : t("usersView.fingerprint.changeTooltipLabel")!
            }
          >
            <span>
              <IconButton
                disabled={fingerprint_available}
                onClick={() =>
                  fingerprintAdvertise(
                    user.condition === "delete" ? "register" : user.condition,
                    user.id
                  )
                }
              >
                <Fingerprint />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={t("usersView.tooltips.deleteUser")}>
            <IconButton onClick={() => deleteUserHandler}>
              <Delete color="error" />
            </IconButton>
          </Tooltip>

          <Tooltip title={t("usersView.tooltips.userDetails")}>
            <IconButton onClick={() => userView(user.id)}>
              <Edit color="secondary" />
            </IconButton>
          </Tooltip>
        </Stack>,
      ])
    );

    return data;
  };

  const usersTable: JSX.Element = (
    <Grid item width="100%">
      <Paper variant="elevation">
        <Table
          dense
          locale="usersTable"
          headerName="title"
          rows={userDataTableNormalizer(UsersList)}
        />
      </Paper>
    </Grid>
  );

  React.useEffect(() => {
    usersPreparation();
  }, []);

  return (
    <Grid
      container
      flexDirection="column"
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      padding="20px"
    >
      <Grid
        item
        width="90%"
        alignSelf="center"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {usersListLoad ? (
          <CircularProgress color="secondary" />
        ) : usersListEmpty ? (
          <Alert severity="warning" style={{ width: "100%" }}>
            {t("usersView.empty")}
          </Alert>
        ) : usersListFailureFetch ? (
          <Alert severity="error" style={{ width: "100%" }}>
            {t("usersView.fetchError")}
          </Alert>
        ) : (
          React.Children.only(usersTable)
        )}
      </Grid>
      <Grid
        item
        justifyContent="center"
        alignItems="flex-start"
        alignContent="flex-start"
        width="89%"
        padding="5px"
        margin="10px"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Fab
          variant="extended"
          aria-label="addUser"
          style={{ alignSelf: "flex-end" }}
          onClick={() => navigate("/users/add")}
        >
          <Add color="primary" />
          {t("usersView.fab.userAdd")}
        </Fab>
      </Grid>

      {/* User Fingers removal*/}
      <SimpleDialog
        open={removalUserFingersDialog}
        title={t("usersView.fingerprint.deleteFingersDialog.title")}
        content={t("usersView.fingerprint.deleteFingersDialog.content")!}
        agreeLabel={t("actions.agree")}
        ignoreLabel={t("actions.close")}
        agreeLoading={removeFingersLoad}
        agreeIcon={<Delete />}
        ignoreIcon={<Close />}
        agree={() => userFingerprintCollectionRemoval(removalUserId)}
        ignore={() => removalUserFingersDialogDispatch}
      />

      <SimpleDialog
        open={removalUserDialogValue}
        title={t("usersView.deleteDialog.title")}
        content={t("usersView.deleteDialog.content")!}
        agreeLabel={t("actions.agree")}
        ignoreLabel={t("actions.close")}
        agreeLoading={removeUserLoad}
        agreeIcon={<Delete />}
        ignoreIcon={<Close />}
        agree={() => userRemoval(removalUserId)}
        ignore={() => removalUserDialogDispatch}
      />
      <FingerprintDialogComponent
        api={api}
        refresh={() =>
          fingerprintAdvertise(
            lastSelectedFingerprintCondition,
            lastSelectedFingerprintUserId
          )
        }
      />
    </Grid>
  );
};

export const usersPreparation = UsersScreen.prototype.usersPreparation;
export const userRemoval = UsersScreen.prototype.userRemoval;
export const fingerprintAdvertise = UsersScreen.prototype.fingerprintAdvertise;
export const userFingerprintCollectionRemoval = UsersScreen.prototype.userFingerprintCollectionRemoval
export default UsersScreen;
