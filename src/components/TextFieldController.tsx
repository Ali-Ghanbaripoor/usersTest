import { TextField } from "@mui/material";
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
  helper: React.ReactNode | any; // Fix any
  fieldType: FieldsType;
  maxLen: number;
  multiLine?: boolean;
  inlineLabel?: string;
  adornment?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler;
}

const TextFieldController = (params: TextFieldControllerProps) => {
  return (
    <TextField
      size="medium"
      value={params.value}
      name={params.inputName}
      label={params.label}
      onChange={params.onChange}
      onFocus={params.onFocus}
      onBlur={params.onBlur}
      type={params.fieldType}
      multiline={params.multiLine || false}
      error={params.error}
      helperText={params.helper}
      className="custom-mui-textfield"
      onKeyDown={params.onKeyDown}
      color="primary"
      id={`${params.label}`}
      variant="filled"
      InputProps={{
        endAdornment: params.adornment,
      }}
      inputProps={{
        maxLength: params.maxLen,
      }}
      style={{
        margin: "5px",
      }}
    />
  );
};

export default TextFieldController;
