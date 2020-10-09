import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm';

const Graph = ({ title, data, type, height = 250, onSelect, ...other }) => {
  const ref = useRef();
  useEffect(() => {
    const newGraph = new Chart(ref.current, {
      title,
      data,
      type,
      height,
      is_navigable: !!onSelect,
      ...other,
    });
  }, [data, height, other, title, type]);

  return (
    <div>
      <div {...{ ref, 'data-select': onSelect }} />
    </div>
  );
};

export default Graph;

Graph.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  height: PropTypes.number,
  title: PropTypes.string.isRequired,
};

Graph.defaultProps = {
  height: 250,
  onSelect: () => {},
};
