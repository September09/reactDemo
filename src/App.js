/**
 * Created by september on 2018/5/27.
 */

import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./style/common.scss"
import Header from "./components/header"
import Footer from "./components/Footer"
import Sider from "./components/sider"
import { Layout } from "antd"
const { Content } = Layout

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Layout>
          <Sider/>
          <Layout>
            <Header />
            <Content style={{ margin: "24px 16px 0" }}>
              <ul style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login">登录</NavLink></li>
                <li><NavLink to="/register">注册</NavLink></li>
                <div>您还未登录</div>
                <div>欢迎您</div>
              </ul>
            </Content>
            <Footer/>
          </Layout>
        </Layout>
      </div>
    )
  }
}

