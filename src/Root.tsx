import React from "react";
import { hot } from "react-hot-loader";

import Footer from "./Footer";
import TrendingSeries from "./series";

const Root = (): JSX.Element => (
  <div className="app" data-testid="app">
    <TrendingSeries />
    <Footer />
  </div>
);

export default hot(module)(Root);
