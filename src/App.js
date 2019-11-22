import React, { Component }  from "react";
import "./App.css";
// import Navbar from './components/Navbar';
import Cardjson from './craigslist.json';
import Card from './Components/Card/card';
import Menu from "./Components/Menu/Menu";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        list: Cardjson
    }
}
showCard = () =>{
  return this.state.list.map((eachCard,i)=>{
      return(
        <Card className="card" key={i} imgs={eachCard["Image Links "]}></Card>
      )
  })
}
render () {
  console.log("this is list", this.state.list);

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>Craigslist Mock Up</h1>
      {/* <Navbar></Navbar> */}
      <div className="gallery">
      {this.showCard()}
      </div>
    </div>
  );
}
}

export default App;
