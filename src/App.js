import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Graph from "./Graph";

const randomData = () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

class App extends Component {
  state = {
    datasets: [
      {
        color: "light-blue",
        values: randomData()
      }
    ]
  };
  randomize = () => {
    this.setState({
      datasets: [
        {
          values: randomData()
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React wrapper for frappe-charts</h1>
        </header>
        <Graph
          title="Bar Chart"
          type="bar"
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: this.state.datasets
          }}
          onSelect={a => console.log(a.index)}
        />
        <button onClick={this.randomize}>Update Data</button>
        <Graph
          title="Line Chart"
          type="line"
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: this.state.datasets
          }}
          show_dots={false}
          heatline
          region_fill
        />
      </div>
    );
  }
}

export default App;
