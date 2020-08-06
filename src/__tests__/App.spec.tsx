import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders", () => {
    const app = shallow(<App />);

    expect(app).toHaveLength(1);
  });
});
