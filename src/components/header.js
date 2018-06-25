/**
 * Created by september on 2018/6/25.
 */

import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { NavLink } from "react-router-dom"
import { Menu } from "antd"
import "../style/header.scss"

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    return (
      <div className="header">
        <div className="logo col20 fl">logo</div>
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
        <div className="right col20 fl">
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
      </div>
    )
  }
}

export default Header
