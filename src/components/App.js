import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          dark={true}
          headerClassName="justify-content-center"
          className="Header"
        >
          SplitSmart
        </Header>
      </div>
    );
  }
}

export default App;
