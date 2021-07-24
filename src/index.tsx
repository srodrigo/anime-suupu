import React from "react";
import { render } from "react-dom";

import { AppContext } from "./App";
import Root from "./Root";
import packageInfo from "../package.json";

import "./styles/main.scss";

const root = document.createElement("div");
document.body.append(root);

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
render(
  <AppContext.Provider value={{ version: packageInfo.version }}>
    <Root />
  </AppContext.Provider>,
  root
);
