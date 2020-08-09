import React from "react";
import { hot } from "react-hot-loader";

import Footer from "./Footer";

interface Props {
  version: string;
}

const App: React.FC<Props> = ({ version }: Props) => (
  <div data-testid="app">
    Hello world TS!
    <Footer version={version} data-testid="footer" />
  </div>
);

export default hot(module)(App);
