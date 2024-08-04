/**
 * TODO: This Map is not clean. Fix this locales repeat.
 *
 * # Error Code String Mapper
 *
 * Gets Error number from api response and prepare proper error string base-on
 * locales.
 *
 * Key type is number and value is string, but important note is that string
 * value. At this version, string values defined only key of localization.
 *
 * ## Realistic Format
 * * You can parse and split a semantic string from following format:
 *
 * `errors.<ErrorType>.<Category>.<Sub-categories>.<Message>`
 *
 * @example
 *
 * "error": {
 *  "system": {
 *      calibration": "Calibration Quality is low {Error_code}"
 *   }
 * }
 *
 * "error.system.calibration": "Calibration Quality is low {Error_code}"
 *
 * @example
 * toast.show(t(ErrorCodeStringMapper[response.data.error_number]), "warning");
 */
export declare const ErrorCodeStringMapper: Readonly<{
    [key: number]: string;
}>;
