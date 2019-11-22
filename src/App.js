import React from "react";
import "./App.css";

import Cardjson from "../public/craigslist.json";

import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Craigslist Mock Up</h1>
    </div>
  );
}

export default App;
