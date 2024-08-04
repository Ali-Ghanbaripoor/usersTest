/**
 * # In-app config
 *
 * Server config, some default style sizing, window server and other constant
 * config values.
 *
 * @constant
 */

import { blue, green, orange, red, yellow } from "@mui/material/colors";

const config = {
  server: {
    requestLifeCycleTimeout: 3000,
    axiosTimeout: 240000, // 4 min await
  },
  i18n: {
    // Default language started by 0
    locales: ["en", "fa", "ar"] as const,
  },
  toast: {
    autoCloseTime: 5000,
    limit: 5,
  },
  style: {
    separations: {
      date: "/",
      time: ":",
      empty: "-",
    },
    fieldLimits: {
      username: {
        min: 2,
        max: 15,
      },
      passwd: {
        min: 4,
        max: 12,
      },
    },
    maxWidth: "1128px",
    imageFlickTransition: "all 0.001s",
    backgroundColor: "#464640",
    results: {
      blurCensor: "5px",
      blurCensorBackgroundColor: "#F7CE39D1",
    },
    drawerSize: "300px",
    modelSize: {
      width: "480px",
      height: "625px",
    },
    resultImgSize: {
      width: "586px",
      height: "756px",
    },
    resultFilter: {
      row: 9,
      col: 6,
      buttonTileSize: {
        width: "96px",
        height: "84px",
      },
    },
    customerSelfieImgSize: {
      width: "190px",
      height: "150px",
    },
    leadingIconSize: "25px",
    colors: {
      primary: "#1f1f1f",
      secondary: "#d7a712",
      tertiary: "#ffc107",
      disabled: "#ffd65844",
      active: "#d7a7128c",
      brown: {
        500: "#1f1f1f",
        600: "#d7a7128c",
        700: "#ffc107",
      },
      status: {
        filler: "#464640",
        danger: red[900],
        caution: orange[500],
        warning: yellow[500],
        neutral: blue[600],
        safe: green[800],
      },
    },
  },
  system: {
    version: "1.3.3",
    timeout: 1500,
    fingerprintAuth: {
      timeout: 500, // ms
    },
  },
};

export default config;
