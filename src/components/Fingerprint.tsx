import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  LinearProgress,
  Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  Close,
  Fingerprint as FingerprintIcon,
  Refresh,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as React from "react";

import Api from "../api/Api";
import { Toast } from "./Toast";
import { endpoints } from "../api/Endpoints";

interface FingerprintComponent {
  api: Api;
  refresh: () => void;
  store_fingerprint_open?:any;
  store_fingerprint_title?:any;
  store_fingerprint_content?:any;
  store_fingerprint_isScanning?:any;
  store_fingerprint_ableToReScan?:any
}

/**
 * # Fingerprint
 *
 * A Dialog component to show fingerprint condition.
 *
 * Main logic control of this dialog is {@link FingerprintDialog} and
 * {@link setFingerprintIndications}.
 *
 * @param {void} refresh - A refresh async function
 * @return {JSX.Element} A Fingerprint dialog component
 */
const Fingerprint: React.FC<FingerprintComponent> = ({
  api,
  refresh = () => {},
  store_fingerprint_open,
  store_fingerprint_title,
  store_fingerprint_content,
  store_fingerprint_isScanning,
  store_fingerprint_ableToReScan
}): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /**
   * # Cancel Fingerprint Request
   *
   * - Cancels request
   * - Closes dialog
   */
  const cancelFingerprintRequest = async () => {
    const { uri, method } = endpoints.auth.cancelFingerprint;
    try {
      await api.requestHandler(uri, method);
      api.cancelRequest();
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  return (
    <Dialog
      open={store_fingerprint_open}
      onClose={() => cancelFingerprintRequest()}
      aria-labelledby={`alert-dialog-fingerprint-title`}
      aria-describedby={`alert-dialog-fingerprint-description`}
    >
      <DialogTitle id={`alert-dialog-fingerprint-title-label`}>
        {store_fingerprint_title}
      </DialogTitle>
      <Grid container flexDirection="row" justifyContent="center">
        <FingerprintIcon style={{ width: "100px", height: "100px" }} />
      </Grid>
      <DialogContent>
        <DialogContentText id={`alert-dialog-fingerprint-description`}>
          {store_fingerprint_content}
        </DialogContentText>

        {store_fingerprint_isScanning ? (
          <LinearProgress color="secondary" />
        ) : (
          <></>
        )}
      </DialogContent>
      <DialogActions>
        <LoadingButton
          variant="contained"
          color="secondary"
          disabled={!store_fingerprint_ableToReScan}
          onClick={refresh}
          endIcon={<Refresh />}
        >
          {t("fingerprint.rescan")}
        </LoadingButton>
        <LoadingButton
          variant="text"
          color="error"
          onClick={() => cancelFingerprintRequest()}
          endIcon={<Close />}
        >
          {t("actions.cancel")}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default Fingerprint;
