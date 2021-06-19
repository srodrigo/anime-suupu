import React from "react";
import { hot } from "react-hot-loader";

import Footer from "./Footer";

interface Properties {
  version: string;
}

const App: React.FC<Properties> = ({ version }: Properties) => (
  <div data-testid="app">
    Hello world TS!
    <Footer version={version} />
  </div>
);

// eslint-disable-next-line unicorn/prefer-module
export default hot(module)(App);
