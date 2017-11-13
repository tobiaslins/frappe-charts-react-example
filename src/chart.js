import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Frappe from 'frappe-charts/dist/frappe-charts.min.esm'

class Chart extends Component {
  componentDidMount() {
    const {
      title,
      data,
      type = 'bar',
      height = 250,
      onSelect,
      ...rest
    } = this.props
    this.c = new Frappe({
      parent: this.chart,
      title,
      data,
      type,
      height,
      is_navigable: !!onSelect,
      ...rest
    })
    if (onSelect) {
      this.c.parent.addEventListener('data-select', onSelect)
    }
  }
  componentWillReceiveProps(props) {
    this.c.update_values(props.data.datasets, props.data.labels)
  }
  render() {
    return <div ref={chart => (this.chart = chart)} />
  }
}

export default Chart
