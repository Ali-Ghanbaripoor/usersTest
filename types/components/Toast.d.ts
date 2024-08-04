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
import { toast } from "react-toastify";
export type AlertType = "info" | "success" | "warning" | "error" | "default" | undefined;
/**
 * # Toast an alert
 *
 * @param {string} message - String text message
 * @param {AlertType} alertType - Type of Alert
 * @returns
 */
export declare const Toast: (message: string, alertType?: AlertType) => typeof toast | React.ReactText;
declare const _default: () => JSX.Element;
export default _default;
