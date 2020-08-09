import React from "react";

interface Props {
  version: string;
}

const Footer: React.FC<Props> = ({ version }: Props) => (
  <div data-testid="version">{`Version ${version}`}</div>
);

export default Footer;
