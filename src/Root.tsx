import React from "react";
import { hot } from "react-hot-loader";

import Footer from "./Footer";
import TrendingSeries from "./series";

const Root = (): JSX.Element => (
  <div data-testid="app">
    <TrendingSeries />
    <Footer />
  </div>
);

// eslint-disable-next-line unicorn/prefer-module
export default hot(module)(Root);
