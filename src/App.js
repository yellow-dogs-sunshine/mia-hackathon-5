import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Cardjson from '../public/craigslist.json';

class App extends Component {
  return (
    <div className="App">
      <h1>Craigslist Mock Up</h1>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
