/**
 * # Supported Method
 *
 * All method that this app can support.
 */
export type SupportedMethods = "get" | "post" | "patch" | "put" | "delete";
declare class EndpointBody {
    uri: string;
    method: SupportedMethods;
    constructor(uri: string, method: SupportedMethods);
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
export declare const endpoints: {
    system: {
        init: EndpointBody;
        calibration: EndpointBody;
        calibrationStatus: EndpointBody;
        shutdown: EndpointBody;
    };
    auth: {
        login: EndpointBody;
        refresh: EndpointBody;
        userInfo: EndpointBody;
        logout: EndpointBody;
        fingerprint: EndpointBody;
        cancelFingerprint: EndpointBody;
    };
    users: {
        getUsers: EndpointBody;
        getRoles: EndpointBody;
        getUserById: EndpointBody;
        userFieldValueCheck: EndpointBody;
        register: EndpointBody;
        update: EndpointBody;
        deleteUser: EndpointBody;
        fingerprintCondition: EndpointBody;
        changePassword: EndpointBody;
    };
    process: {
        canStart: EndpointBody;
        startProcess: EndpointBody;
        scan: {
            startScan: EndpointBody;
            stopScan: EndpointBody;
        };
    };
    result: {
        startResult: EndpointBody;
        filter: EndpointBody;
    };
    health: {
        healthCheck: EndpointBody;
    };
    quartering: {
        scannedList: EndpointBody;
    };
    radioactive: {
        scan: EndpointBody;
        powerStatus: EndpointBody;
        powerSwitch: EndpointBody;
        info: EndpointBody;
        CSV: EndpointBody;
    };
};
export {};
