export declare namespace Time {
    /**
     * # Normalization UTC DateTime to Standard DateTime in case of 8601
     *
     * @param {string} dateTime - UTC DateTime
     * @returns {string} - returns standard string DateTime
     */
    const normalizeUTCToStandard8601: (dateTime: string) => string;
}
