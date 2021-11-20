import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
const Layout = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
};

export default Layout;
