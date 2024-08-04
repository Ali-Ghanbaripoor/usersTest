import config from "../config/config";

export namespace Time {
  /**
   * # Normalization UTC DateTime to Standard DateTime in case of 8601
   *
   * @param {string} dateTime - UTC DateTime
   * @returns {string} - returns standard string DateTime
   */
  export const normalizeUTCToStandard8601 = (dateTime: string): string => {
    if (dateTime !== null) {
      const definedDateTime = new Date(dateTime);
      const normalDate: string =
        definedDateTime.toLocaleDateString("fa-IR-u-nu-latn");

      const normalTime: string = [
        definedDateTime.getHours(),
        definedDateTime.getMinutes(),
      ]
        .toString()
        .replace(/,/g, ":");

      return `${normalDate} ${normalTime}`;
    } else {
      return config.style.separations.empty;
    }
  };
}
