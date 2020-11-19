import React from 'react';

export default class Checkbox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      is_checked: false
    };
  }

  toggleCheckbox(){
    this.setState((current_state) => {
      console.log(this);
      this.props.heading(!current_state.is_checked);
      return {is_checked: !current_state.is_checked};
    });
  }

  render(){
    const style={
      height: '100px',
      width: '500px'
    };

    return (
      <div style={style}>

        {/* Two different implementations */}
        {/* <input type='checkbox' checked={this.state.is_checked} onChange={() => this.toggleCheckbox()}/> */}
        <input type='checkbox' checked={this.state.is_checked} onChange={this.toggleCheckbox.bind(this)}/>
        
        <label>Double Portion</label>
      </div>
    );
  }
}