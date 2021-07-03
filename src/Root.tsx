import React from "react";
import { hot } from "react-hot-loader";

import Footer from "./Footer";

const Root = (): JSX.Element => (
  <div data-testid="app">
    <Footer />
  </div>
);

// eslint-disable-next-line unicorn/prefer-module
export default hot(module)(Root);
