import { UserRole } from "../../../@types/global";

/** Login Request */
export interface LoginAuth {
  username: string;
  password: string;
}

/** Login Response */
export interface LoginResponse {
  success: boolean;
  data: AuthorizationKey;
}

/** JWT Tokens */
export interface AuthorizationKey {
  access: string;
  refresh: string;
  expire: string;
}

/**
 * # Accounting
 *
 * Authorized user info.
 * */
export interface Accounting {
  id: string; // Mongo ObjectID
  f_name: string;
  l_name: string;
  role: UserRole; // It support string type
  username: string;
  national_code: string;
  personal_code: string;
  phone: string;
  email: string; // Optional
}
