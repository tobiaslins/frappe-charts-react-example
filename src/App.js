import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'frappe-charts/dist/frappe-charts.min.css'

import Chart from './chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chart title="Test" data={{
    labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
      "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

    datasets: [
      {
        title: "Some Data", color: "light-blue",
        values: [25, 40, 30, 35, 8, 52, 17, -4]
      },
      {
        title: "Another Set", color: "violet",
        values: [25, 50, -10, 15, 18, 32, 27, 14]
      },
      {
        title: "Yet Another", color: "blue",
        values: [15, 20, -3, -15, 58, 12, -17, 37]
      }
    ]
  }}/>
      </div>
    )
  }
}

export default App
