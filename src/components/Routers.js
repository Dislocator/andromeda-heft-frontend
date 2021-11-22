import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Login from "../pages/login/Login";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import BhGenerator from "../pages/generator/BhGenerator";
const LoginContainer = () => (
  <>
    <Route exact path="/generator" component={BhGenerator} />
    <Route exact path="/login" component={Login} />
  </>
);

const DefaultContainer = () => (
  <>
    <Navbar />
    <Sidebar />
    <Route path="/" component={Landing} />

    <Footer />
  </>
);

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/generator" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  );
};

export default Routers;
