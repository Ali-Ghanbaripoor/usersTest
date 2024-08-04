import { Grid } from "@mui/material";
import * as React from "react";
import SimpleKeyboard from "react-simple-keyboard";

interface SimpleKeyboardProps {
  inputName: string;
  onChange: (input: string) => void;
  keyboardRef: React.MutableRefObject<string>;
  keyboardLayout?: any; //loginProvider.keyboardLayout
  keyboardLayoutDispatch?:any; //["keyboardLayout"],[loginProvider.keyboardLayout === "default"? "shift": "default",],
}

/**
 * # Virtual Keyboard from `simple-react-keyboard`
 *
 * Render a keyboard on display.
 *
 * @param {void} onChange - Void function
 * @param {React.MutableRefObject<string>} ref - non-refresh state
 *
 * @returns {JSX.Element}
 */
const KeyboardWrapper: React.FC<SimpleKeyboardProps> = ({
  inputName,
  onChange,
  keyboardRef,
  keyboardLayout,
  keyboardLayoutDispatch
}) => {

  return (
    <Grid container style={{ direction: "ltr" }}>
      <SimpleKeyboard
        inputName={inputName}
        keyboardRef={(r: any) => (keyboardRef.current = r)}
        layoutName={keyboardLayout}
        onChange={onChange}
        onKeyPress={(button: string) => {
          if (button === "{shift}" || button === "{lock}")
            keyboardLayoutDispatch
        }}
      />
    </Grid>
  );
};

export default KeyboardWrapper;
