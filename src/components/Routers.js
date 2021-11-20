import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Login from "../pages/login/Login";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const LoginContainer = () => <Route exact path="/login" component={Login} />;

const DefaultContainer = () => (
  <>
    <Navbar />
    <Sidebar />
    <Route path="/" component={Landing} />
  </>
);

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  );
};

export default Routers;
