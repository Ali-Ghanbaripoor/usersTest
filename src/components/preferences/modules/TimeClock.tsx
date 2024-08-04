import moment from "jalali-moment";
import React from "react";
import * as Mui from "@mui/material";
import config from "../../../config/config";

type LocaleProviderLocale = {
  localeProviderLocale?: any; //state.changeLocale.locale
};

const TimeClock: React.FC<LocaleProviderLocale> = ({
  localeProviderLocale,
}): JSX.Element => {
  const [time, setTime] = React.useState<string>(
    moment().locale(localeProviderLocale).format("hh:mm")
  );

  /** # Moment UI */
  const momentUI: JSX.Element = (
    <Mui.Grid
      container
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      flexDirection="row-reverse"
      justifyContent="center"
      marginLeft="10px"
    >
      <Mui.Grid item marginTop="7px">
        <Mui.Typography variant="subtitle1" align="center" textAlign="center">
          {moment()
            .locale(localeProviderLocale)
            .format(
              `DD${config.style.separations.date}MMMM${config.style.separations.date}YYYY`
            )}
        </Mui.Typography>
      </Mui.Grid>
      <Mui.Divider orientation="vertical" style={{ marginRight: "10px" }} />
      <Mui.Grid item style={{ direction: "ltr" }}>
        <Mui.Typography
          variant="h1"
          fontWeight="bold"
          fontFamily="DigitalDisplay"
          align="center"
          textAlign="center"
        >
          {time}
        </Mui.Typography>
      </Mui.Grid>
    </Mui.Grid>
  );

  React.useEffect(() => {
    const timer = setInterval(
      () => setTime(moment().locale(localeProviderLocale).format("hh:mm")),
      1000
    );

    return () => clearInterval(timer);
  }, []);

  return React.Children.only(momentUI);
};

export default TimeClock;
