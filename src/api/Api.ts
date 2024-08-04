import axios, { AxiosResponse } from "axios";

import config from "../config/config";
import { endpoints, SupportedMethods } from "./Endpoints";
import { AuthorizationKey } from "../modules/Login/interfaces/Auth";
import { invoke } from "@tauri-apps/api";
import { ServerError } from "../@types/global";

// Abort controller defined about cancel one or more request process
var controller = new AbortController();

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
  private _token: string = "";

  /**
   * @param {string} token as private user JWT
   */
  constructor(token: string) {
    this._token = token;
  }

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
  public requestHandler = async (
    path: string,
    method: SupportedMethods,
    data?: object
  ) => {
    const IP =
      import.meta.env.VITE_BASE_IP && import.meta.env.MODE === "development"
        ? `http://${import.meta.env.VITE_BASE_IP}:9092`
        : `http://${await invoke("fetch_ip")}:9092`;

        if(import.meta.env.MODE !== "development"){
          await invoke("power_on");
        }
        
    try {
      // Define headers like here
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer + ${this._token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      const response: AxiosResponse = await axios[method](`${IP}${path}`, {
        ...data,
        signal: controller.signal,
        timeout: config.server.axiosTimeout,
      });

      // Passing response of data or errors
      return response.data;
    } catch (error: any) {
      // Define Error object to error handle of view
      let errorData: ServerError = {
        status: 0,
        data: undefined,
      };

      if (error.response) {
        errorData = {
          status: error.response.status,
          data: error.response.data,
        };
      } else if (error.request) {
        errorData = {
          ...errorData,
          data: error.request,
        };
      } else {
        errorData = {
          ...errorData,
          data: error.message,
        };
      }

      if (errorData.status === 401 && this._token !== "") this._refreshToken();

      return errorData;
    }
  };

  /**
   * # Refresh Token
   *
   * It reloads and re-init `jwt` access key in `LocalStorage`.
   */
  private _refreshToken = async (): Promise<void> => {
    let keys: AuthorizationKey = JSON.parse(
      localStorage.getItem("keys") ?? "{}"
    );

    const { uri, method } = endpoints.auth.refresh;

    try {
      const refreshResponse: { success: boolean; data: AuthorizationKey } =
        await this.requestHandler(uri, method, {
          access: keys.access,
          refresh: keys.refresh,
          expire: keys.expire,
        } as AuthorizationKey);

      if (refreshResponse.success) {
        keys.access = refreshResponse.data.access;
        keys.refresh = refreshResponse.data.refresh;
        keys.expire = refreshResponse.data.expire;

        // Update keys in `LocalStorage`
        localStorage.setItem("keys", JSON.stringify(keys));
      } else {
        localStorage.clear();
      }

      window.location.reload();
    } catch (e) {
      localStorage.clear();
      window.location.reload();
    }
  };

  /** # Cancel Request flow, Almost all flows at the same time */
  public cancelRequest = () => {
    // cancel request flow
    controller.abort();
    // Init again new AbortController, signal will refresh after 2.5s!
    setTimeout(() => {
      controller = new AbortController();
    }, 1000);
  };
}
