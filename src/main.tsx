/* -----------------------------------------------------------------------------
 * Copyright (c) Paya Communication Industry, Incorporated. All rights reserved.
 * See LICENSE.md in the project root. For license terms and full copyright
 * notice, Should generate new one.
 * -----------------------------------------------------------------------------
 * */

import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { theme } from "./config/theme";
import ToastContainer from "./components/Toast";

import "./index.css";
import "./i18n/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
