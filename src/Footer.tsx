import React from "react";

interface Properties {
  version: string;
}

const Footer: React.FC<Properties> = ({ version }: Properties) => (
  <div data-testid="version">{`Version ${version}`}</div>
);

export default Footer;
