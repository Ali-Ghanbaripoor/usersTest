import {
  Box,
  Button as MuiButton,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fingerprint, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as React from "react";
import * as yup from "yup";

import Api from "../../api/Api";
import { endpoints } from "../../api/Endpoints";
import config from "../../config/config";
import Button from "../../components/ButtonController";
import FingerprintDialog from "../../components/Fingerprint";
import KeyboardWrapper from "../../components/KeyboardWrapper";
import MomentHeader from "../../components/preferences";
import TextFieldController from "../../components/TextFieldController";
import { Toast } from "../../components/Toast";
import * as Auth from "./interfaces/Auth";
import * as LoginProps from "./interfaces/Indicators";
import { ErrorCodeStringMapper } from "../../utils/Errors";
import { LoginNS } from "./ns/loginNS";
import LoginContainer from "../../components/LoginContainer";
import { FieldsType } from "../../@types/global";

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
const LoginScreen: React.FC<Omit<LoginScreen, "access">> = ({
  t,
  fingerprint_available,
  isSecurePasswd,
  loginLoading,
  isSecurePasswdHandler,
  currentFocusedFieldHandler,
  currentFocusedField,
}) => {

  let api = new Api("");

  // Virtual software keyboard state without any refresh
  const keyboard: React.MutableRefObject<string> = React.useRef("");

  const isSecure: FieldsType = isSecurePasswd
    ? "password"
    : "text";

  // Constant sizes
  const FIELDSIZE: string = useMediaQuery("(max-width: 500px)")
    ? "100%"
    : "320px";

  const KEYBOARDSIZE: string = !useMediaQuery("(max-width: 1128px)")
    ? "1000px"
    : "60%";

  const VIRTUALKEYBOARDMODE: string = useMediaQuery("(max-width: 650px)")
    ? "none"
    : "flex";

  /** # Login form validator powered by `Formik`. */
  const loginFormValidator = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup // TODO: Change limits and locales strings
        .string()
        // .min(config.style.fieldLimits.username.min, "Minimum character is 15")
        // .max(config.style.fieldLimits.username.max, "Maximum character is 15")
        .required(t("login.loginForm.required.username")!),
      password: yup
        .string()
        // .min(config.style.fieldLimits.passwd.min, "Minimum character is 4")
        // .max(config.style.fieldLimits.passwd.max, "Maximum character is 12")
        .required(t("login.loginForm.required.password")!),
    }),
    onSubmit: (values) => login(values),
  });

  /**
   * # User Data Preparation
   *
   * Gets user data and save it into {@link saveUserData} reducer.
   *
   * @param {string} token - `jwt` access token
   */
  const userDataPreparation = async (token: string): Promise<any> => {
    api = new Api(token);
    const { uri, method } = endpoints.auth.userInfo;

    try {
      const userDataResult: { success: boolean; data: Auth.Accounting } =
        await api.requestHandler(uri, method);
      return { userDataResult };
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  /** # The official Login
   *
   * After successful user authorization, it saves auth keys and user data in
   * LocalStorage and `Accounting` reducer.
   */
  const login = async (userAuth: Required<Auth.LoginAuth>): Promise<any> => {
    const { uri, method } = endpoints.auth.login;
    try {
      const authorizationResult: Auth.LoginResponse = await api.requestHandler(
        uri,
        method,
        userAuth
      );
      return { authorizationResult };
    } catch (e) {
      Toast(`${e}`, "error");
    }
  };

  /**
   * # Authenticate with Fingerprint
   *
   * An alternative way to authorizing into Sightence application. It sends
   * simple POST request to a specific endpoint, after scan correct finger it
   * will return `JWT` keys similar to simple login and will navigate to `/scan`
   * path.
   */
  const authWithFingerprint = async () => {
    const { uri, method } = endpoints.auth.fingerprint;
    try {
      const authorizationResult: Auth.LoginResponse = await api.requestHandler(
        uri,
        method
      );
    } catch (e: any) {
      Toast(e, "warning");
    }
  };

  /**
   * # On Login Form KeyDown
   *
   * "Enter" KeyDown event form handler for login form.
   *
   * @param {React.KeyboardEvent} event - Regular HTML event handler
   */
  const onLoginFormKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      loginFormValidator.handleSubmit();
    }
  };

  /**
   * # Login Form Stack
   *
   * Render dynamic login form by `loginFields` list.
   */
  const loginFormStack: JSX.Element | JSX.Element[] = (
    <Grid
      container
      flexDirection="column"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      style={{
        width: "80%",
        height: "360px",
        padding: "10px",
      }}
    >
      {React.Children.toArray(
        LoginNS.loginFields.map((field: LoginProps.LoginFields) => (
          <FormControl sx={{ width: FIELDSIZE }}>
            <TextFieldController
              inputName={field.name}
              label={t(`login.${field.name}`).toString()}
              fieldType={field.type === "password" ? isSecure : field.type}
              value={loginFormValidator.values[field.name]}
              maxLen={20}
              helper={loginFormValidator.errors[field.name]}
              onKeyDown={onLoginFormKeyDown}
              adornment={
                field.name === "password" ? (
                  <IconButton onClick={() => isSecurePasswdHandler}>
                    {isSecurePasswd ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                ) : (
                  <></>
                )
              }
              onFocus={() =>
                currentFocusedFieldHandler
              }
              error={
                loginFormValidator.touched[field.name] &&
                Boolean(loginFormValidator.errors[field.name])
              }
              onChange={loginFormValidator.handleChange}
            />
          </FormControl>
        ))
      )}

      <Grid
        container
        justifyContent="center"
        alignSelf="center"
        alignItems="center"
      >
        <Grid item style={{ marginTop: "10px" }}>
          <MuiButton
            disabled={!fingerprint_available}
            variant="outlined"
            color="secondary"
            endIcon={<Fingerprint />}
            style={{ marginRight: "10px" }}
            onClick={() => authWithFingerprint()}
          >
            {t("login.fingerprint.fingerprintAuth")}
          </MuiButton>
        </Grid>
        <Grid item style={{ marginTop: "10px" }}>
          {loginLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button
              type="submit"
              onClick={() => loginFormValidator.handleSubmit()}
            >
              <Typography variant="h4">{t("login.login")}</Typography>
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );

  /** # React simple keyboard */
  const uiKeyboard: JSX.Element = (
    <Box
      style={{
        border: `3px solid ${config.style.colors.tertiary}`,
        borderRadius: "8px",
        width: KEYBOARDSIZE,
        display: VIRTUALKEYBOARDMODE,
        alignSelf: "center",
        margin: "20px",
        boxShadow: `0px 0px 10px 2px ${config.style.colors.active}`,
      }}
    >
      <KeyboardWrapper
        inputName={currentFocusedField}
        keyboardRef={keyboard}
        onChange={(value: string) => {
          loginFormValidator.setFieldValue(
            currentFocusedField,
            value
          );
        }}
      />
    </Box>
  );

  React.useEffect(() => {
    // If hardware was healthy
    if (fingerprint_available) {
      // Activate fingerprint dialog after `config.system.fingerprintAuth.timeout`
      setTimeout(
        () => authWithFingerprint(),
        config.system.fingerprintAuth.timeout
      );
    }
  }, []);

  return (
    <div>
      <MomentHeader />
      <LoginContainer>
        <Grid
          container
          alignSelf="center"
          justifyContent="center"
          style={{ width: "200px", height: "120px" }}
        >
          <Box
            style={{
              width: "180px",
              height: "115px",
              marginTop: "10px",
              marginBottom: "20px",
              backgroundImage: "url(/assets/images/logo-login.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              alignSelf: "center",
            }}
          />
        </Grid>

        {/* Login form */}
        {React.Children.only(loginFormStack)}
        {React.Children.only(uiKeyboard)}
      </LoginContainer>
      <FingerprintDialog api={api} refresh={() => authWithFingerprint()} />
    </div>
  );
};

export default LoginScreen;
