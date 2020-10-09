import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';

const StyledApp = styled(App)`
margin: 0;
padding: 0;
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
`;

ReactDOM.render(<StyledApp />, window.document.getElementById('main'));

if (module.hot) {
  module.hot.accept();
}
