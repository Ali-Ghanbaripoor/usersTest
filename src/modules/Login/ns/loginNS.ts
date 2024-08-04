import * as LoginProps from "../interfaces/Indicators";

/**
 * # Login namespace
 *
 * - {@link loginFields}: Renders login fields base on this list
 */
export namespace LoginNS {
  /**
   * # List of Login Fields
   *
   * Used in pre-render all fields of login.
   */
  export const loginFields: Readonly<LoginProps.LoginFields>[] = [
    { name: "username", type: "text" },
    { name: "password", type: "password" },
  ];
}
