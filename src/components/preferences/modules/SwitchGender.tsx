import * as Mui from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { SelectProps } from "../interface";

type switchGenderProps = {
  genderOptions?:any; //state.system
  genderOptionsDispatch?:any; //dispatch(setUserPreferencesIndications([["genderOptions"],[parseInt(event.target.value)],])). note target value that should pass with onclick
}

const SwitchGender: React.FC<switchGenderProps> = ({genderOptions, genderOptionsDispatch}): JSX.Element => {
  const { t } = useTranslation();

  const supportedGender: SelectProps[] = [
    {
      name: t("gender.select.man"),
      value: "0",
    },
    {
      name: t("gender.select.woman"),
      value: "1",
    },
    {
      name: t("gender.select.both"),
      value: "2",
    },
  ];

  /**
   * Change Gender Type Selection UI
   *
   * Users can change their preferences about item of genders.
   *
   * @return JSX.Element UI
   */
  const changeGenderTypeSelectionUI: JSX.Element = (
    <Mui.FormControl fullWidth>
      <Mui.InputLabel id="moment-change-lang" variant="filled">
        {t("gender.select.selectGender")}
      </Mui.InputLabel>
      <Mui.Select
        variant="filled"
        fullWidth
        defaultValue={`${genderOptions.userPreferences.genderOptions}`}
        onChange={(event: Mui.SelectChangeEvent) =>
          genderOptionsDispatch
        }
      >
        {supportedGender.map((gender: SelectProps, index: number) => (
          <Mui.MenuItem key={index} value={gender.value}>
            {gender.name}
          </Mui.MenuItem>
        ))}
      </Mui.Select>
    </Mui.FormControl>
  );

  return React.Children.only(changeGenderTypeSelectionUI);
};

export default SwitchGender;
