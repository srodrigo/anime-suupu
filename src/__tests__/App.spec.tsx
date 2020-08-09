import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App", () => {
  it("renders", () => {
    const version = "2.9.7";
    const appWrapper = shallow(<App version={version} />);

    const footerWrapper = appWrapper.find("[data-testid='footer']");
    expect(footerWrapper.length).toEqual(1);
    expect(footerWrapper.props().version).toEqual(version);
  });
});
