/**
 * Created by september on 2018/5/27.
 */

import React, { Component } from "react"
// import { NavLink } from "react-router-dom"
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
      <div style={{widt: "100%", height: "100%"}}>
        <Layout style={{widt: "100%", height: "100%"}}>
          <Sider/>
          <Layout>
            <Header/>
            <Content style={{ margin: "24px 16px 0" }} />
            <Footer/>
          </Layout>
        </Layout>
      </div>
    )
  }
}

