import { SupportedMethods } from "./Endpoints";
/**
 * # Api class
 *
 * Use it for sending request to server and prepare data in both error and
 * successful status, cancel request flows entirely ant refresh `jwt`.
 *
 * @method  requestHandler Handles client requests to server
 * @method  cancel Requests flow at the waterfall
 * @method  _refreshAccessToken, check if jwt from jwt-server has been
 * expired * */
export default class Api {
    private _token;
    /**
     * @param {string} token as private user JWT
     */
    constructor(token: string);
    /**
     * # Request Handler
     *
     * Handle request to optional endpoint, can send data at the body of request
     * and listen to a signal for cancel continue of a request.
     *
     * @param {string} path endpoint of an Api
     * @param {string} method
     * @param {object} data data to send at the body of request as Map
     * @returns original data in body of response
     */
    requestHandler: (path: string, method: SupportedMethods, data?: object) => Promise<any>;
    /**
     * # Refresh Token
     *
     * It reloads and re-init `jwt` access key in `LocalStorage`.
     */
    private _refreshToken;
    /** # Cancel Request flow, Almost all flows at the same time */
    cancelRequest: () => void;
}
