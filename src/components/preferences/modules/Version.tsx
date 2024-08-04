import {
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import React from "react";
import { useTranslation } from "react-i18next";

export interface SystemVersion {
  ai: string;
  hardware: string;
  reconstruction: string;
  software: string;
}

type versionProps = {
  version?:any;//state.init.versions
}

const ApplicationsVersion: React.FC<versionProps> = ({version}): JSX.Element => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState<boolean>(false);

  const onClose = (): void => setOpen(false);

  const systemVersion = (): JSX.Element[] => {
    const versionUI: JSX.Element[] = [];

    for (let key in version) {
      const item: JSX.Element = (
        <Grid container justifyContent="center">
          <Grid
            item
            xs={5}
            justifyContent="start"
            alignContent="start"
            textAlign="start"
            marginTop="10px"
          >
            <Typography>
              {t(`settings.userPreferences.systemVersion.platforms.${key}`)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            justifyContent="end"
            alignContent="end"
            textAlign="end"
            marginTop="10px"
          >
            <Typography>
              V{version[key as keyof SystemVersion]}
            </Typography>
          </Grid>
        </Grid>
      );
      versionUI.push(item);
    }

    return versionUI;
  };

  return (
    <>
      <ListItem>
        <ListItemButton onClick={() => setOpen(true)}>
          <ListItemIcon>
            <QuestionMark color="info" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6">
              {t("settings.userPreferences.systemVersion.title")}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby={"dialog-system-version-title"}
        aria-describedby={"dialog-system-version-description"}
      >
        <DialogTitle id={"dialog-system-version-title-label"}>
          {t("settings.userPreferences.systemVersion.title")}
        </DialogTitle>
        <DialogContent>
          <Grid container>{React.Children.toArray(systemVersion())}</Grid>
        </DialogContent>

        <DialogActions>
          <Button variant="text" color="error" onClick={onClose}>
            {t("actions.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicationsVersion;
