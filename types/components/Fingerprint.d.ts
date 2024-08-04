import * as React from "react";
import Api from "../api/Api";
interface FingerprintComponent {
    api: Api;
    refresh: () => void;
    store_fingerprint_open?: any;
    store_fingerprint_title?: any;
    store_fingerprint_content?: any;
    store_fingerprint_isScanning?: any;
    store_fingerprint_ableToReScan?: any;
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
declare const Fingerprint: React.FC<FingerprintComponent>;
export default Fingerprint;
