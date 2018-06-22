/**
 * Created by september on 2018/5/27.
 */

import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./style/common.scss"
import { Layout, Menu } from "antd"
const { Header, Content } = Layout

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="containerWrapper">
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1"><NavLink to="/home">Home</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/stuff">Stuff</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/contact">Contact</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to="/login">登录</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to="/register">注册</NavLink></Menu.Item>
            </Menu>
          </Header>
          <Content style={{marginTop: '64px'}}>
            <ul>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/login">登录</NavLink></li>
              <li><NavLink to="/register">注册</NavLink></li>
              <div>您还未登录</div>
              <div>欢迎您</div>
            </ul>
          </Content>
        </Layout>
      </div>
    )
  }
}

