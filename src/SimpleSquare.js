import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default function SimpleSquare({size, color}){
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color
  }

  return (
    <div style={style} className='square'></div>
  );
}

SimpleSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

SimpleSquare.defaultProps = {
  color: 'blue',
  size: '100px'
}