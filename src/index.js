// (function () {
//     console.log("hey mister")
// }());
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
// import { Router, Route, Switch, Rsdirect } from "react-router-dom";
import APP from "./app";
// core components
import Admin from "layouts/Admin.jsx";

// import "assets/css/material-dashboard-react.css?v=1.6.0";

// import 'index.scss'
// let HelloWorld = () => {
//   return <h1>Hello there World!</h1>
// }

const hist = createBrowserHistory();
ReactDOM.render(
  <APP />,
  // <HelloWorld />,
  // <Router history={hist}>
  //   <Switch>
  //     <Route path="/admin" component={Admin} />
  //     <Route path="/" to="/admin/dashboard" />
  //   </Switch>
  // </Router>,
  document.getElementById("root")
);
