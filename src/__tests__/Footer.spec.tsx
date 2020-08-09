import React from "react";
import { shallow } from "enzyme";

import Footer from "../Footer";

describe("Footer", () => {
  it("renders version", () => {
    const version = "1.2.8";
    const footerWrapper = shallow(<Footer version={version} />);

    const versionWrapper = footerWrapper.find("[data-testid='version']");
    expect(versionWrapper.length).toEqual(1);
    expect(versionWrapper.text()).toEqual(`Version ${version}`);
  });
});
