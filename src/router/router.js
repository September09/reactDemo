import React from "react"
import { Route, hashHistory } from "react-router"
import { HashRouter } from "react-router-dom"
import App from "../App"
import Home from "../containers/home/index"
import Stuff from "../containers/Stuff"
import Contact from "../containers/Contact"
import CashLoan from "../containers/cash/index"


const RouteMap = () =>
  <HashRouter history={hashHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/stuff" component={Stuff} />
      <Route path="/contact" component={Contact} />
      <Route path="/cashLoan" component={CashLoan} />
    </div>
  </HashRouter>


export default RouteMap
