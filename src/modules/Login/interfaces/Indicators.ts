/** All state that can change in Login view life cycle */

import { LoginFieldsName,KeyboardLayout,FieldsType } from "../../../@types/global";
export interface LoginIndicators {
  systemLoading: boolean;
  keyboardEnabled: boolean;
  loginLoading: boolean;
  currentFocusedField: LoginFieldsName;
  keyboardLayout: KeyboardLayout;
  isSecurePasswd: boolean;
}

export interface LoginFields {
  name: LoginFieldsName;
  type: FieldsType;
}
