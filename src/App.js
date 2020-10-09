import React, { useState } from 'react';
import styled from 'styled-components';

import Graph from './Graph';

const randomData = () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));

const CreateExampleData = () => (
  { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      name: 'Commits',
      chartType: 'bar',
      values: randomData(),
    },
    {
      name: 'Coffees',
      chartType: 'line',
      values: randomData(),
    }] }
);

const Types = ['bar', 'pie', 'percentage'];

const App = () => {
  const [data, SetData] = useState(CreateExampleData());

  const updateValues = () => {
    SetData(CreateExampleData());
    console.log(data);
  };

  return (
    <Root>
      <Header>
        <Title>React Wrapper for frappe-charts</Title>
      </Header>
      <button {...{ onClick: () => updateValues(), type: 'button' }}>
        Update data !
      </button>
      { Types.map((x) => (
        <Graph
          {...{ title: `${x[0].toUpperCase() + x.substring(1)} chart`,
            type: x,
            key: x,
            data }}
        />
      ))}
    </Root>
  );
};

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
