/**
 * Created by september on 2018/7/16.
 */
import React, { Component } from "react"
import { NavBar, Icon } from "antd-mobile"
import "./NavBar.scss"

export default class NavBarPlus extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <NavBar
        className="NavBarColor"
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={this.props.rightContent ? this.props.rightContent : null}
      >{this.props.title}</NavBar>
    )
  }
}
