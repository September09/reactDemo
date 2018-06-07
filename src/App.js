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
      <div className="containerWrapper">
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login">登录</NavLink></li>
          <li><NavLink to="/register">注册</NavLink></li>
          <div>您还未登录</div>
          <div>欢迎您</div>
        </ul>
      </div>
    )
  }
}

