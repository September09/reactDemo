import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Header from "../components/header"
import * as homeActions from "../actions/home"

import { Table } from "antd"

const { Column } = Table

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: [
        {
          key: "1",
          "_id": "5b346c49812fae295a017a77",
          "userName": "111111",
          "password": "$2a$10$PQGDfdqWxy8cqCzKlxMSNeOPbzqRZmj3DFzbp3Z5H66azH.JFzCN.",
          "create_time": "2018-06-28 13:04"
        },
        {
          key: "2",
          "_id": "5b3494416750283b95b87b61",
          "userName": "111112",
          "password": "$2a$10$kMbyac4eBFCtxXj2y34x6.MOcFnPj9rhYuFeQC5j1N6YrOxZBhO.O",
          "create_time": "2018-06-28 15:54"
        },
        {
          key: "3",
          "_id": "5b35e9bca70ac703d4d0838e",
          "userName": "111113",
          "password": "$2a$10$pvxPaPGNgmwOQInznW.bZO0iyK3M3Ov1/hsE5f8j1gqmumfu0kNua",
          "create_time": "2018-06-29 16:11"
        }

      ],
      loading: false,
      hasMore: true,
    }
  }
  componentDidMount() {
    this.props.homeActions.getAllUsers((data) => {
      console.log(data)
      this.props.homeActions.userInfoState(data)
    })
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        <Header defaultSelectedKeys="1"/>
        <Table dataSource={this.state.data}>
          <Column
            title="userName"
            dataIndex="userName"
            key="userName"
          />
          <Column
            title="password"
            dataIndex="password"
            key="password"
          />
          <Column
            title="create_time"
            dataIndex="create_time"
            key="create_time"
          />
          <Column
            title="_id"
            dataIndex="_id"
            key="_id"
          />
        </Table>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators({...homeActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

