import React, { Component }  from "react";
import './card.css';
// import Cardjson from './craigslist.json.js';

export class card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: 0,
      slidesArr: this.props.imgs
      // list: Cardjson
    }
}
clickLeft = () => {
  let moveleftArr = [...this.state.slidesArr]
  const lastIndex = moveleftArr.length - 1;
  const { currentPic } = this.state;
  const shouldResetIndex = currentPic === 0;
  const index =  shouldResetIndex ? lastIndex : currentPic - 1;

  this.setState({
    currentPic: index
  });
}

clickRight = () => {
  let moverightArr = [...this.state.slidesArr]
  const lastIndex = moverightArr.length - 1;
  const { currentPic } = this.state;
  const shouldResetIndex = currentPic === lastIndex;
  const index =  shouldResetIndex ? 0 : currentPic + 1;

  this.setState({
    currentPic: index
  });
}
  render() {
    return (
      <div className="card-wrapper">
        <div className="carousel">
        <button onClick={this.clickLeft}>Left</button>
        <img src={this.state.slidesArr[this.state.currentPic]}  alt="carousel" />
        <button onClick={this.clickRight}>Right</button>
        </div>
        <div className="content">
          <h3>Details</h3>
          <h4>Price</h4>
        </div>
      </div>
    )
  }
}

export default card
