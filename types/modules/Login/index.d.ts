import * as React from "react";
export interface SystemVersion {
    ai: string;
    hardware: string;
    reconstruction: string;
    software: string;
}
export interface SplashScreenIndicators {
    systemInitiation: boolean;
    callToSupportCTA: boolean;
    serverError: boolean;
    callToSupportLabel: string;
    fingerprint_available: boolean;
    camera_available: boolean;
    versions: SystemVersion;
}
/**
 * # Login View
 *
 * @param t - `useTranslation` "t" function from 'react-i18next`
 */
declare const LoginScreen: React.FC<Omit<LoginScreen, "access">>;
export default LoginScreen;
