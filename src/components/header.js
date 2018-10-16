/**
 * Created by september on 2018/6/25.
 */

import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { NavLink } from "react-router-dom"
import { Menu, Layout } from "antd"
const { Header } = Layout
import "../style/header.scss"

class HeaderPlus extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    console.log("header", this.props)
    return (
      <Header style={{ background: "#fff", padding: 0 }} >
        <div className="middle col60 fl">
          <Menu
            theme="primary-color"
            mode="horizontal"
            defaultSelectedKeys={[this.props.defaultSelectedKeys]}
            style={{ lineHeight: "3.2rem" }}
          >
            <Menu.Item key="1"><NavLink to="/home">Home</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/stuff">Stuff</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/contact">Contact</NavLink></Menu.Item>
          </Menu>
        </div>
        <div className="right col40 fl">
          <Menu
            theme="primary-color"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "3.2rem" }}
          >
            <Menu.Item key="4"><NavLink to="/login">登录</NavLink></Menu.Item>
            <Menu.Item key="5"><NavLink to="/register">注册</NavLink></Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}

export default HeaderPlus
