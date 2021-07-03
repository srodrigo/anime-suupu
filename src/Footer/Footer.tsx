import React, { useContext } from "react";

import { AppContext } from "../App";

const Footer = (): JSX.Element => {
  const { version } = useContext(AppContext);

  return <div>{`Version ${version}`}</div>;
};

export default Footer;
