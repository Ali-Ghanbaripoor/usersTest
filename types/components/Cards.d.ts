/**
 * # All Card component designed here
 *
 * - {@link AlarmCard}: Prepare a Card with power of Grid
 *
 * @module
 */
import * as React from "react";
export interface AlarmProps {
    title: string;
    content: string;
    time: string;
}
/** Alarm card
 *
 * @param {string} title - Title of Alarm message
 * @param {string} content - Content of Alarm message
 * @returns {JSX.Element}
 */
export declare const AlarmCard: React.FC<AlarmProps>;
