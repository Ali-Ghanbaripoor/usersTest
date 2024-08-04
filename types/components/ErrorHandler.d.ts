import { TFunction } from "i18next";
import * as React from "react";
export type HttpErrors = 403 | 404 | 500;
/**
 * # Http client Error message handler
 *
 * @param {number} code - Status code error
 * @returns {JSX.Element}
 */
export declare const HttpError: ({ code, t, }: {
    code?: number | undefined;
    t: TFunction;
}) => JSX.Element;
/** Catch children throws and render another component instead. */
export default class ErrorHandler extends React.Component<{
    children: React.ReactNode;
    t: TFunction;
}> {
    constructor(props: {
        children: React.ReactNode | React.ReactNode[] | undefined;
        t: TFunction;
    });
    static getDerivedStateFromError(err: Error): {
        err: Error;
    };
    render(): JSX.Element;
}
