import { CircularProgress, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import config from "../../../config/config";
import React from "react";
import { RadioActiveStatus } from "../../../@types/global";

interface RadioactiveStatus {
  status: string;
  color: string;
}

type radioactiveProps = {
  isRadioactiveLoading?: any; //state.scan.isRadioactiveLoading
  radioactive?: any; //state.scan.radioactive
};

const Radioactive = ({
  isRadioactiveLoading,
  radioactive,
}: radioactiveProps): JSX.Element => {
  const { t } = useTranslation();

  const radioactiveColorIndicator = (
    status: RadioActiveStatus
  ): RadioactiveStatus => {
    switch (status) {
      case "clean":
        return { color: "#0f6", status: "radioactive.status.clean" };
      case "moderate":
        return { color: "#ff9", status: "radioactive.status.moderate" };
      case "severe":
        return { color: "#f50", status: "radioactive.status.severe" };
      case "alarm":
        return { color: "#f00", status: "radioactive.status.alarm" };
      default:
        return { color: "#fff", status: "radioactive.status.idle" };
    }
  };

  const radioactiveContext: JSX.Element = isRadioactiveLoading ? (
    <CircularProgress
      color="secondary"
      style={{ width: "25px", height: "25px" }}
      sx={{ mx: "10px" }}
    />
  ) : (
    <Typography
      variant="h2"
      sx={{
        mx: "10px",
        color: radioactiveColorIndicator(radioactive).color,
      }}
      textAlign="center"
      alignSelf="center"
    >
      {t(radioactiveColorIndicator(radioactive).status)}
    </Typography>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "180px",
        height: "90vh",
        marginRight: "1rem",
        backgroundImage: "linear-gradient(90deg, #171717 0%, #3d3d3d 78%)",
        borderRadius: "30px",
        border: `1px solid ${config.style.colors.primary}`,
      }}
    >
      {isRadioactiveLoading ? (
        <React.Fragment />
      ) : (
        <img
          width="130px"
          height="130px"
          src={`./assets/images/radioactive/${radioactive}.svg`}
        />
      )}
      {React.Children.only(radioactiveContext)}
    </div>
  );
};

export default Radioactive;
