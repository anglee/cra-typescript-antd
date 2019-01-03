import _ from "lodash";
import React, { Component } from "react";
import "./App.css";
import Hello from "./Hello";
import logo from "./logo.svg";

class App extends Component {
  public render() {
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
          {_.map(_.range(5), (it: number) => (
            <div key={it}>{it}</div>
          ))}
          <Hello
            name={"Nelly Sachs"}
            onClickButton={({ name }) => {
              return new Promise(res => {
                setTimeout(res, 1000);
              });
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
