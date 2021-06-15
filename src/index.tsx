import React from "react";
import { render } from "react-dom";

import App from "./App";
import packageInfo from "../package.json";

const root = document.createElement("div");
document.body.append(root);

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
render(<App version={packageInfo.version} />, root);
