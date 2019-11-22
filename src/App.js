import React, { Component } from "react";
import "./App.css";

import Cardjson from "./craigslist.json";
import Card from "./Components/Card/card";
import Menu from "./Components/Menu/Menu";

export default class App extends Component {
  state = {
    list: Cardjson
  };

  showCard = () => {
    return this.state.list.map((eachCard, i) => {
      return (
        <Card className="card" key={i} imgs={eachCard["Image Links "]}></Card>
      );
    });
  };
  render() {
    // console.log("this is list", this.state.list);

    return (
      <div className="App">
        <Menu />
        <h1>Craigslist Mock Up</h1>
        <div className="gallery">{this.showCard()}</div>
      </div>
    );
  }
}
