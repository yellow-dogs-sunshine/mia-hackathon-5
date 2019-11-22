import React from "react";

import { Breadcrumb, Navbar } from "react-bootstrap";
import "./Menu.css";
export default function Menu() {
  return (
    <Navbar className="navbar-container">
      <p className="logo">CL</p>

      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <p>User Icon will be here</p>
    </Navbar>
  );
}
