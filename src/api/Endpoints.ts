/**
 * # Supported Method
 *
 * All method that this app can support.
 */
export type SupportedMethods = "get" | "post" | "patch" | "put" | "delete";

// Endpoint body structure.
class EndpointBody {
  uri: string;
  method: SupportedMethods;

  constructor(uri: string, method: SupportedMethods) {
    this.uri = uri;
    this.method = method;
  }
}

/**
 * # EOM, Endpoints Object Mapper
 *
 * All Endpoints that this Application needs to send request to the Server-Api.
 *
 * @example
 * const { uri, method } = endpoints.system.init;
 *
 */
export const endpoints = {
  system: {
    init: new EndpointBody("/init", "get"),
    calibration: new EndpointBody("/calibration", "post"),
    calibrationStatus: new EndpointBody("/calibration_status", "get"),
    shutdown: new EndpointBody("/shut_down", "post"),
  },
  auth: {
    login: new EndpointBody("/login", "post"),
    refresh: new EndpointBody("/refresh_token", "post"),
    userInfo: new EndpointBody("/get-user-info", "get"),
    // {@link https://stackoverflow.com/questions/3521290/logout-get-or-post/14587231#14587231 }
    logout: new EndpointBody("/logout", "post"),
    fingerprint: new EndpointBody("/fingerprint_auth", "post"),
    cancelFingerprint: new EndpointBody("/fingerprint_cancel", "post"),
  },
  users: {
    getUsers: new EndpointBody("/get-users", "get"),
    getRoles: new EndpointBody("/get-roles", "get"),
    getUserById: new EndpointBody("/get-user", "get"),
    userFieldValueCheck: new EndpointBody("/check_fields", "post"),
    register: new EndpointBody("/register", "post"),
    update: new EndpointBody("/update_user", "post"),
    deleteUser: new EndpointBody("/delete_user", "post"),
    fingerprintCondition: new EndpointBody(
      "/change_user_fingerprint_condition",
      "post"
    ),
    changePassword: new EndpointBody("/change_password", "post"),
  },
  process: {
    canStart: new EndpointBody("/can_start", "get"),
    startProcess: new EndpointBody("/start_proc", "post"),
    scan: {
      startScan: new EndpointBody("/start_scan", "post"),
      stopScan: new EndpointBody("/stop_scan", "post"),
    },
  },
  result: {
    startResult: new EndpointBody("/results_images", "post"),
    filter: new EndpointBody("/apply_local_enhancement", "post"),
  },
  health: {
    healthCheck: new EndpointBody("/health_check", "post"),
  },
  quartering: {
    scannedList: new EndpointBody("/get_scanned_list", "get"),
  },
  radioactive: {
    scan: new EndpointBody("/radioactive", "get"),
    powerStatus: new EndpointBody("/radioactive_power_state", "get"),
    powerSwitch: new EndpointBody("/radioactive_switch", "post"),
    info:new EndpointBody("/radioactive_info", "get"),
    CSV: new EndpointBody("/radioactive_CSV","get"),
  },
};
