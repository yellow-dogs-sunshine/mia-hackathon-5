import React from "react";
import "./App.css";

import Cardjson from "./craigslist.json";

import Menu from "./Components/Menu/Menu";
function App() {
  return (
    <div className="App">
      <Menu />
      <h1>Craigslist Mock Up</h1>
    </div>
  );
}

export default App;
