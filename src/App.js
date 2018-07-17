/**
 * Created by september on 2018/5/27.
 */

import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./style/common.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/cashLoan">cashLoan</NavLink></li>
        </ul>
      </div>
    )
  }
}

