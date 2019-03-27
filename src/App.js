import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

      
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
      
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    return (
      <div>
      <header className="App-header">
      <div className="App">
        <img src={logo} className={this.state.working ? "App-logo":"Logo-modif"} alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
        <button onClick={this.handleClick}>Bouton</button>
        </div>
      </header>
       </div>
    )
  }
}

export default App;