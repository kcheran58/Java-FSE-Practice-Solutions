import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';
import './App.css'; // Import the CSS

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div className="app-container">
        <h1>React Event Handling</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>Click Me (Synthetic Event)</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
