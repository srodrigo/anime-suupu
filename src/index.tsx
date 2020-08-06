import React from "react";
import { render } from "react-dom";
import App from "./App";

const root = document.createElement("div");
document.body.append(root);

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
render(<App />, root);
