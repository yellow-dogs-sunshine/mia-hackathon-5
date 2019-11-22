import React from "react";

import { Breadcrumb, Navbar } from "react-bootstrap";
import "./Menu.css";
export default function Menu() {
  return (
    <Navbar className="navbar-container">
      <p className="logo">CL</p>

      <Breadcrumb>
        <Breadcrumb.Item href="#">general location</Breadcrumb.Item>
        <Breadcrumb.Item href="#">all areas or a specific area</Breadcrumb.Item>
        <Breadcrumb.Item>category</Breadcrumb.Item>
        <Breadcrumb.Item>sub-categories</Breadcrumb.Item>
      </Breadcrumb>

      <p>User Icon will be here</p>
    </Navbar>
  );
}