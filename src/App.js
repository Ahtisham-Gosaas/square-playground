import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SimpleSquare from './SimpleSquare';
import Hideable from './Hideable';
import Checkbox from './checkbox'

const HideableSquare = Hideable(SimpleSquare);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      is_checked: false
    };
  }

  toggle_value(val){
    console.log(this);
    this.setState({
      is_checked: val
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* <Square /> */}
        {/* <Square initial_color='red'/> */}
        {/* <Square initial_color='green'/> */}
  
        {/* <SimpleSquare color='magenta' size={200}/> */}
  
        {/* <HideableSquare isHidden={true} color='red' size={300} />
        <HideableSquare isHidden={false} color='red' size={300} /> */}
  

        {/* Two different implementations */}
        {/* <Checkbox heading={(val) => this.toggle_value(val)} /> */}
        <Checkbox heading={this.toggle_value.bind(this)} />


        <div>The value of checkbox is {this.state.is_checked ? 'true' : 'false'}</div>
      </div>
    );
  }
}

export default App;
