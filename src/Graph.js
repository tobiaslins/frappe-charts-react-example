import React, { Component } from "react";
import { string, object } from "prop-types";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

class Graph extends Component {
  componentDidMount() {
    const { title, data, type, height = 250, onSelect, ...rest } = this.props;
    this.graph = new Chart(this.chart, {
      title,
      data,
      type,
      height,
      is_navigable: !!onSelect,
      ...rest
    });
    if (onSelect) {
      this.graph.parent.addEventListener("data-select", onSelect);
    }
  }
  componentWillReceiveProps(props) {
    this.graph.update(props.data);
  }
  render() {
    return <div ref={chart => (this.chart = chart)} />;
  }
}

export default Graph;

Graph.propTypes = {
  type: string.isRequired,
  data: object.isRequired
};
