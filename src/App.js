import React from "react";
import logo from "./logo.svg";
import styled from 'styled-components';

import Graph from "./Graph";

const App = () => (
      <Root>
        <Header>
          <Logo {...{ src: logo, alt: 'logo '}} />
          <Title>React wrapper for frappe-charts</Title>
        </Header>
        <Graph
          title="Bar Chart"
          type="bar"
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [{
              name: "Some Data", chartType: 'bar',
              values: [25, 40, 30, 35, 8, 52, 17, -4]
            },
            {
              name: "Another Set", chartType: 'bar',
              values: [25, 50, -10, 15, 18, 32, 27, 14]
            }],
          }}
          onSelect={a => console.log(a.index)}
        />
        <button {...{ onClick: () => {} }}>Update Data</button>
        <Graph
          title="Line Chart"
          type="line"
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [{
              name: "Some Data", chartType: 'bar',
              values: [25, 40, 30, 35, 8, 52, 17, -4]
            },
            {
              name: "Another Set", chartType: 'bar',
              values: [25, 50, -10, 15, 18, 32, 27, 14]
            }],
          }}
          show_dots={false}
          heatline
          region_fill
        />
      </Root>
);

const Root = styled(App)`
text-align: center;
`;

const Logo = styled.img`
text-align: center;
`;

const Header = styled.header`
background: #252830;
color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`;

const Title = styled.h1`
margin-left: 30px;
`;

export default App;
