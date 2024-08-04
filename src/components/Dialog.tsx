import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
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
const SimpleDialog: React.FC<DialogProps> = ({
  title = "Title",
  content = "Content",
  children = <></>,
  open = false,
  agreeLabel = "Ok",
  ignoreLabel = "Cancel",
  agreeIcon,
  ignoreIcon,
  agree = () => {},
  ignore = () => {},
  agreeLoading = false,
  cancelLoading = false,
}) => {
  return (
    <Dialog
      open={open}
      onClose={ignore}
      aria-labelledby={`alert-dialog-${title}-title`}
      aria-describedby={`alert-dialog-${title}-description`}
    >
      <DialogTitle id={`alert-dialog-${title}-title-label`}>
        {title}
      </DialogTitle>
      {/* Shows @MuiIcon */}
      {children}
      <DialogContent>
        <DialogContentText id={`alert-dialog-${title}-description`}>
          {content}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <LoadingButton
          variant="contained"
          color="secondary"
          loading={agreeLoading}
          onClick={agree}
          endIcon={agreeIcon}
        >
          {agreeLabel}
        </LoadingButton>
        <LoadingButton
          variant="text"
          color="error"
          loading={cancelLoading}
          onClick={ignore}
          endIcon={ignoreIcon}
        >
          {ignoreLabel}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;
