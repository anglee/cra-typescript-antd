import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Hello name={"Nelly Sachs"} onClickButton={(name) => {
            return new Promise((res) => {
              setTimeout(res, 1000);
            })
          }}/>
        </header>
      </div>
    );
  }
}

export default App;
