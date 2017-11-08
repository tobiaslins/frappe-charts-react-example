# Frappe Charts with React

Create component as in chart.js

```js
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
```

And now include and use the created React component (dont forget to include the css):

```jsx
import Chart from './chart'
import 'frappe-charts/dist/frappe-charts.min.css'

<Chart
  title="Test"
  data={{
    labels: [
      '12am-3am',
      '3am-6am',
      '6am-9am',
      '9am-12pm',
      '12pm-3pm',
      '3pm-6pm',
      '6pm-9pm',
      '9pm-12am'
    ],

    datasets: [
      {
        title: 'Some Data',
        color: 'light-blue',
        values: [25, 40, 30, 35, 8, 52, 17, -4]
      },
      {
        title: 'Another Set',
        color: 'violet',
        values: [25, 50, -10, 15, 18, 32, 27, 14]
      },
      {
        title: 'Yet Another',
        color: 'blue',
        values: [15, 20, -3, -15, 58, 12, -17, 37]
      }
    ]
  }}
/>
```
