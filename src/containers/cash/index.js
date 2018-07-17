/**
 * Created by september on 2018/7/16.
 */

import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import NavBar from "../../components/NavBar/NavBar"
import "./index.scss"
import { InputItem } from "antd-mobile"

class cashLoan extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      type: "money",
    }
  }
  componentDidMount() {

  }
  navBarRightButton() {
    return (
      <div  onClick={()=> {console.log("right Click")}}>协议</div>
    )
  }

  render() {
    const { type } = this.state
    return (
      <div>
        <NavBar title="借款" rightContent={this.navBarRightButton()}/>
        <div className="cashContainer">
          <div className="mostCash">
            <div className="mostLeft">
              最高可借： &yen; 12455.00
            </div>
            <div className="payPlan">
              还款计划
            </div>
          </div>
          <div className="allCash">
            <InputItem
              type={type}
              placeholder="500元起借，100元递增"
              clear
              moneyKeyboardAlign="left"
            ></InputItem>
          </div>
        </div>
      </div>

    )
  }
}


export default cashLoan
