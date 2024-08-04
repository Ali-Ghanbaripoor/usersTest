/**
 * # User Role Type
 *
 * __Note__: `UserRole` has a specific type with a string type. This string type
 * used in Accounting reducer `saveUserData()` after user authorization, to save
 * info in localStorage and keep this state in redux engine.
 */

import { Accounting } from "../modules/Login/interfaces/Auth";

export type UserRole = "superuser" | "admin" | "staff" | string;

type Keys = "access" | "refresh" | "expire";

type Account = keyof Accounting;

type UserForm =
  | "f_name"
  | "l_name"
  | "username"
  | "password"
  | "email"
  | "phone"
  | "national_code"
  | "personal_code";

type ModifyType = "register" | "update";
