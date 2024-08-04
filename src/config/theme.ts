import { createTheme } from "@mui/material";

import config from "../config/config";

/**
 * # The official App Theme
 *
 * ## Typography
 *
 * - Config headlines from h1..h6
 * - Config twice subtitles
 * - Config twice bodies
 * - Config Buttons
 * - Config caption
 * - Config overline
 *
 * ## Color Palette
 *
 * - Primary
 * - Secondary
 *
 * ## Mui Component configuration
 *
 * - Root configs
 */
export const theme = createTheme({
  typography: {
    fontFamily: "iransans",
    h1: {
      fontSize: 45,
      fontWeight: 200,
    },
    h2: {
      fontSize: 32,
      fontWeight: 200,
    },
    h3: {
      fontSize: 28,
      fontWeight: 400,
    },
    h4: {
      fontSize: 24,
      fontWeight: 400,
    },
    h5: {
      fontSize: 22,
      fontWeight: 400,
    },
    h6: {
      fontSize: 18,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 800,
    },
    overline: {
      fontSize: 12,
      fontWeight: 500,
      color: "#fff",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: config.style.colors.primary,
    },
    secondary: {
      main: config.style.colors.secondary,
    },
    background: {
      default: config.style.backgroundColor,
      paper: config.style.colors.primary,
    },
    divider: "#8f8f8f",
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          lineHeight: "1",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          direction: "ltr", // For default sizing
        },
        textPrimary: {
          color: "#fff",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: config.style.colors.secondary,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        textTransform: "none",
        color: "#fff",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "20px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: config.style.backgroundColor,
          borderRadius: "5px",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: config.style.colors.secondary,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        selectIcon: {
          color: "#fff",
        },
        actions: {
          color: "#fff",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        dot: {
          height: "20px",
          width: "20px",
          borderRadius: "100%",
          border: "0.5px solid #000",
        },
      },
    },
  },
});
