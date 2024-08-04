import { TFunction } from "i18next";
import { Button, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { CenterContainer, CenterContainerColumn } from "./Container";
import config from "../config/config";

export type HttpErrors = 403 | 404 | 500;

const CenterStage = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <CenterContainer>
      <CenterContainerColumn>
        {children}
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginTop: "10px" }}
          onClick={() => {
            navigate("/scan");
            window.location.reload();
          }}
        >
          {t("errorHandler.backToHome")}
        </Button>
      </CenterContainerColumn>
    </CenterContainer>
  );
};

/**
 * # Http client Error message handler
 *
 * @param {number} code - Status code error
 * @returns {JSX.Element}
 */
export const HttpError = ({
  code = 500,
  t,
}: {
  code?: number;
  t: TFunction;
}): JSX.Element => {
  switch (code) {
    case 403:
      return (
        <CenterStage>
          <Typography variant="h6" color="error">
            {t("errorHandler.403")}
          </Typography>
        </CenterStage>
      );
    case 404:
      return (
        <CenterStage>
          <Typography variant="h6" color="secondary">
            {t("errorHandler.404")}
          </Typography>
        </CenterStage>
      );
    case 500:
    default:
      return (
        <CenterStage>
          <Typography variant="h6" color={config.style.colors.tertiary}>
            {t("errorHandler.500")}
          </Typography>
        </CenterStage>
      );
  }
};

/** Catch children throws and render another component instead. */
export default class ErrorHandler extends React.Component<{
  children: React.ReactNode;
  t: TFunction;
}> {
  constructor(props: {
    children: React.ReactNode | React.ReactNode[] | undefined;
    t: TFunction;
  }) {
    super(props);
    this.state = { err: undefined };
  }

  static getDerivedStateFromError(err: Error) {
    return { err };
  }

  render() {
    const s: any = this.state;
    let children = this.props.children;
    let t = this.props.t;

    if (children === undefined) return <HttpError code={404} t={t} />;

    if (s.err !== undefined) {
      if (s.err.code === 404) return <HttpError code={404} t={t} />;
      if (s.err.code === 500) return <HttpError t={t} />;
      return <HttpError t={t} />;
    }

    if (!Array.isArray(children)) children = [children];

    children = React.Children.toArray(children);

    return <>{children}</>;
  }
}
