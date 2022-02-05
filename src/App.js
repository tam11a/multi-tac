import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b style={{ marginTop: "2rem" }}>Multi Tac</b>
        <p>Online Multiplayer Game</p>
        <a
          className="App-link"
          href="https://github.com/tam11a/multi-tac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </header>
    </div>
  );
}

export default App;
