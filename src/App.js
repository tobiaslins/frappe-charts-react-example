import React from 'react';
import styled from 'styled-components';

import Graph from './Graph';

const ExampleData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [{
    name: 'Some Data',
    chartType: 'bar',
    values: [25, 40, 30, 35, 8, 52, 17, -4],
  },
  {
    name: 'Another Set',
    chartType: 'bar',
    values: [25, 50, -10, 15, 18, 32, 27, 14],
  }],
};

const Types = ['bar', 'line', 'pie', 'percentage'];

const App = () => (
  <Root>
    <Header>
      <Title>React Wrapper for frappe-charts</Title>
    </Header>
    { Types.map((x) => (
      <Graph
        {...{ title: `${x[0].toUpperCase() + x.substring(1)} chart`,
          type: x,
          data: ExampleData }}
      />
    ))}
  </Root>
);

const Root = styled.div`
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
