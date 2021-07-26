import React from "react";
import { render } from "react-dom";

import { AppContext } from "./App";
import Root from "./Root";
import packageInfo from "../package.json";

import "./styles/main.scss";

render(
  <AppContext.Provider value={{ version: packageInfo.version }}>
    <Root />
  </AppContext.Provider>,
  document.querySelector("#root")
);
