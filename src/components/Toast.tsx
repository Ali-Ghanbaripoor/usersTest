/**
 * # React Toast component config
 *
 * Define AlertType, main functionality and config default ToastContainer as
 * default module export.
 *
 * @module
 */
import * as React from "react";
import "react-toastify/dist/ReactToastify.css";

import {
  toast,
  ToastContainer as DefaultToastContainer,
  Flip,
} from "react-toastify";

import config from "../config/config";

export type AlertType =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "default"
  | undefined;

/**
 * # Toast an alert
 *
 * @param {string} message - String text message
 * @param {AlertType} alertType - Type of Alert
 * @returns
 */
export const Toast = (message: string, alertType?: AlertType) =>
  alertType === undefined || alertType === "default"
    ? toast
    : toast[alertType](message);

export default () => (
  <DefaultToastContainer
    position="bottom-right"
    autoClose={config.toast.autoCloseTime}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    enableMultiContainer
    limit={config.toast.limit}
    role="alert"
    transition={Flip}
    toastStyle={{ zIndex: -1 }}
    toastClassName="react-toast"
  />
);
