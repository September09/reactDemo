/**
 * Created by september on 2018/7/11.
 */
import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
// import { NavLink } from "react-router-dom"
import { Layout, Menu, Icon } from "antd"

const { Sider } = Layout

class SiderPlus extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.defaultSelectedKeys]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SiderPlus
