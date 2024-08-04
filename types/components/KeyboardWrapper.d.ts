import * as React from "react";
interface SimpleKeyboardProps {
    inputName: string;
    onChange: (input: string) => void;
    keyboardRef: React.MutableRefObject<string>;
    keyboardLayout?: any;
    keyboardLayoutDispatch?: any;
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
declare const KeyboardWrapper: React.FC<SimpleKeyboardProps>;
export default KeyboardWrapper;
