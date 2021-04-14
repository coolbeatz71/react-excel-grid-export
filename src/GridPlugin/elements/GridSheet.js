import React from "react";
import PropTypes from "prop-types";
import GridColumn from "./GridColumn";

export default class GridSheet extends React.Component {
  static propsTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    dataSet: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
    children: PropTypes.arrayOf((propValue, key) => {
      const type = propValue[key];

      if (type !== GridColumn) {
        throw new Error("<GridSheet> can only have <GridColumn> as children");
      }
    }).isRequired,
  };

  render() {
    return null;
  }
}
