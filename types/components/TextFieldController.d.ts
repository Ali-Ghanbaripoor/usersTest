import { FieldsType } from "../@types/global";
import * as React from "react";
interface TextFieldControllerProps {
    label?: string;
    labelDescription?: string;
    value?: string;
    inputName: string;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    error: boolean | undefined;
    helper: React.ReactNode | any;
    fieldType: FieldsType;
    maxLen: number;
    multiLine?: boolean;
    inlineLabel?: string;
    adornment?: React.ReactNode;
    onKeyDown?: React.KeyboardEventHandler;
}
declare const TextFieldController: (params: TextFieldControllerProps) => JSX.Element;
export default TextFieldController;
