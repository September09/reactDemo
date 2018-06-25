/**
 * Created by september on 2018/6/1.
 */


import React, { Component } from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { bindActionCreators } from "redux"
import { Form, Icon, Input, Button } from "antd"
import { connect } from "react-redux"
import "../style/common.scss"
import "../style/register.scss"
import * as loginActions from "../actions/login"

const FormItem = Form.Item
export class Register extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  componentDidMount() {

  }
  shouldComponentUpdate(nextProps) {
    // 登录完成,切成功登录
    // console.log("nextState:", nextProps)
    if (nextProps.status === "登陆成功" && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false
    }
    return true
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="title">注册</div>
        <Form layout="inline">
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username"
              onChange={ (e) => {this.changeHandle("userName", e.target.value) } }/>
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password"
              onChange={ (e) => {this.changeHandle("password", e.target.value) } }
            />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              onClick={ this.clickHandle.bind(this) }
            >
              {this.props.register.registerStatus}
            </Button>
          </FormItem>
        </Form>
        <div className="form-group">登录用户为：{this.props.changeInput.userName}</div>
      </div>
    )
  }
  changeHandle(changeName, changeValue) {
    const changeObj = {}
    changeObj[changeName] = changeValue
    this.props.loginActions.updateBindMobileState(changeObj)
  }

  clickHandle() {
    const {userName, password} = this.props.changeInput
    this.props.loginActions.register(userName, password)
  }
}

const mapStateToProps = state => {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators({...loginActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)


