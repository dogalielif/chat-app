import React, { Component } from "react";
import "./App.scss";
import { LoginPage } from "./pages/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
