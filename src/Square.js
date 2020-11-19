import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current_color: this.props.initial_color,
      x: 0,
      y: 0
    };
  }

  set_color(color){
    this.setState({current_color: color});
  }

  updateCoords(e){
    const {clientX, clientY} = e;
    const {top, left} = this.squareRef.getBoundingClientRect();
    this.setState({
      x: clientX - left,
      y: clientY - top
    });
  }
  
  render(){
    let text_input;

    const style = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.current_color
    };

    return (
      <div>
        <div style={style} className='square' onMouseMove={(e) => this.updateCoords(e)} ref={(element) => this.squareRef = element}>
          <div>{`${this.state.x}, ${this.state.y}`}</div>
        </div>
        <input ref={(element) => text_input = element} type='text' placeholder='color...' />
        <button onClick={() => this.set_color(text_input.value) }>OK</button>
      </div>
      
    );
  }
}

Square.propTypes = {
  initial_color: PropTypes.string
}

Square.defaultProps = {
  initial_color: 'blue'
}