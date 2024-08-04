/**
 * # All Card component designed here
 *
 * - {@link AlarmCard}: Prepare a Card with power of Grid
 *
 * @module
 */

import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";

export interface AlarmProps {
  title: string;
  content: string;
  time: string;
}

/** Alarm card
 *
 * @param {string} title - Title of Alarm message
 * @param {string} content - Content of Alarm message
 * @returns {JSX.Element}
 */
export const AlarmCard: React.FC<AlarmProps> = ({
  title,
  content,
  time,
}): JSX.Element => {
  return (
    <Card>
      <Grid container flexDirection="column" width="100%" padding="5px">
        <Grid container flexDirection="row" justifyContent="space-between">
          <Typography variant="h6" color="secondary">
            {title}
          </Typography>
          <Typography variant="overline" color="white">
            {time}
          </Typography>
        </Grid>
        <Typography variant="subtitle2">{content}</Typography>
      </Grid>
    </Card>
  );
};
