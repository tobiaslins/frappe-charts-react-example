import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Frappe from 'frappe-charts/dist/frappe-charts.min.esm'

class Chart extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { title, data, type = 'bar', height = 250 } = this.props
    let chart = new Frappe({
      parent: this.chart,
      title,
      data,
      type,
      height
    })
  }

  render() {
    return <div ref={chart => (this.chart = chart)} />
  }
}

export default Chart
