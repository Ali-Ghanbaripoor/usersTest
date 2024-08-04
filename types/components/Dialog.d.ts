import * as React from "react";
interface DialogProps {
    title: string;
    content: string | JSX.Element | JSX.Element[];
    children?: React.ReactNode;
    open: boolean;
    agreeLabel: string;
    ignoreLabel: string;
    agreeIcon: any;
    ignoreIcon: any;
    agree: () => void;
    ignore: () => void;
    agreeLoading: boolean;
    cancelLoading?: boolean;
}
/**
 * # Simple Dialog
 *
 * Simple dialog is literally simple and useful. No need more docs about this.
 */
declare const SimpleDialog: React.FC<DialogProps>;
export default SimpleDialog;
