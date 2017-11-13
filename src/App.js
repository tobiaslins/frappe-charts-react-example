import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'frappe-charts/dist/frappe-charts.min.css'

import Chart from './chart'

const randomData = () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))

class App extends Component {
  state = {
    datasets: [
      {
        color: 'light-blue',
        values: randomData()
      }
    ]
  }
  randomize = () => {
    this.setState({
      datasets: [
        {
          values: randomData()
        }
      ]
    })
  }
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
        <Chart
          title="Bar Chart"
          type="bar"
          data={{
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: this.state.datasets
          }}
          onSelect={a => console.log(a.index)}
        />
        <button onClick={this.randomize}>Update Data</button>
        <Chart
          title="Line Chart"
          type="line"
          data={{
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: this.state.datasets
          }}
          show_dots={false}
          heatline
          region_fill
        />
      </div>
    )
  }
}

export default App
