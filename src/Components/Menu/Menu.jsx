import React from "react";

import { Navbar } from "react-bootstrap";
import "./Menu.css";
export default function Menu() {
  return (
    <Navbar className="navbar-container">
      <p className="logo">CL</p>
      <div className="crumbs-container">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <p>User Icon will be here</p>
    </Navbar>
  );
}
