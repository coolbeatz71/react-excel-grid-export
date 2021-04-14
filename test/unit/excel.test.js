import React from "react";
import { shallow } from "enzyme";

import GridColumn from "../../src/GridPlugin/elements/GridColumn";

describe("React Data Export unit test", () => {
  test("should render GridColumn", () => {
    const wrapper = shallow(<GridColumn label={"test"} value={"test"} />);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
