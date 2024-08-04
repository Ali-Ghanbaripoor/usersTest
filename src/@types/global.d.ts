/**
 * # Global types
 *
 * All global types and generics defined in a global declaration and developers
 * can access to that in global access without import any modules or types.
 * @access
 */

import { TFunction } from "i18next";

import * as Locales from "./locales";
import * as Users from "./roles";

declare global {
  type Process =
    | "initializing"
    | "loading"
    | "loaded"
    | "success"
    | "failed"
    | "warning"
    | "empty"
    | "unAuth"
    | "permissionDenied"
    | "serverError"
    | "csrError";

  type UIScreen = {
    access?: string;
    t: TFunction;
  };

  type LoginScreen = {
    access?: string;
    t: TFunction;
    fingerprint_available:any; //initProvider.fingerprint_available
    isSecurePasswd:any; //loginProvider.isSecurePasswd
    loginLoading:any; //loginProvider.loginLoading
    isSecurePasswdHandler:any; //["isSecurePasswd"],[!loginProvider.isSecurePasswd],
    currentFocusedFieldHandler:any; //["currentFocusedField"],[field.name],
    currentFocusedField:any; //loginProvider.currentFocusedField
    
  }

  type UsersScreen = {
    access?: string;
    t: TFunction;
    removeTooltipLabelHandler: any; //dispatch ["removalUserId", "removalUserFingersDialog"], [(user.id, true)];
    fingerprint_available:any; //!initProvider.fingerprint_available
    deleteUserHandler:any //["removalUserDialog", "removalUserId"],[true, user.id],
    UsersList:any //pass list of users
    usersListLoad:any//usersListProvider.usersListLoad
    usersListEmpty:any //usersListProvider.usersListEmpty
    usersListFailureFetch:any //usersListProvider.usersListFailureFetch
    removalUserFingersDialog:any//usersListProvider.removalUserFingersDialog
    removalUserFingersDialogDispatch:any//["removalUserFingersDialog"], [false]
    removalUserId:any//usersListProvider.removalUserId
    removeFingersLoad:any; //usersListProvider.removeFingersLoad
    removalUserDialogValue:any //usersListProvider.removalUserDialog
    removeUserLoad:any; //usersListProvider.removeUserLoad
    removalUserDialogDispatch//[["removalUserDialog"], [false]]
    lastSelectedFingerprintCondition:any;//fingerprintProvider.lastSelectedFingerprintCondition
    lastSelectedFingerprintUserId:any; //fingerprintProvider.lastSelectedFingerprintUserId
  };
}

type HumanModel = "front" | "back";

type ServerError = {
  status?: number;
  data?: {
    error_code: number;
  };
};

type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "inherit"
  | undefined;

// Localization and i18n
type RegionalLocales = Locales.RegionalLocales;
type LocaleCodes = Locales.LocaleCodes;
type Locales = Locales.Locales;

// Users types
type Account = Users.Account;
type Keys = Users.Keys;
type UserRole = Users.UserRole;
type UserForm = Users.UserForm;
type ModifyType = Users.ModifyType;

type KeyboardLayout = "shift" | "default";

/** Textfield Fields type */
type FieldsType = "password" | "text" | "email" | "tel";

/** LoginFieldsType Based-on Formik fields */
type LoginFieldsName = "username" | "password";

/** Drawer anchor type */
type Anchor = "left" | "right";

/** Human Type */
type GenderType = "male" | "female";

/** Image Quality values */
type ImageQuality = 0 | 100 | 200 | 300;

type CalibrationType =
  | "calibration"
  | "clutter"
  | "homingMotor"
  | "metal"
  | "air"
  | string;

/** Sightence app features */
type AppFeatures = "scan" | "results" | "health" | "users" | "settings";

type HealthFixState =
  | "calibrationDisabled"
  | "clutterDisabled"
  | "homingMotorDisabled";

/** Image Result type */
type ResultType =
  | "images" // -> simple
  | "images_with_BoxMask" // -> enhanced;
  | string;

type FingerprintCondition = "register" | "change" | "delete";
/** User Modification type, defined for user table modifications*/
type UserModification = "RemoveUser" | "DeleteFingers" | "UpdateFingers";

/** Related to settings.preferences.edit.password */
type PasswordChangeFieldsName = "newPassword" | "confirmNewPassword";

/** Used in Scanning response mode */
type ScanProcessType = "front" | "back";

/** Colors of Radioactive Indicator: Green, Yellow, Orange, Red */
type RadioActiveStatus =
  | "clean"
  | "moderate"
  | "severe"
  | "alarm"
  | "waiting"
  | "idle";
