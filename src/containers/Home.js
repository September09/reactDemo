import React from "react"
import Header from "../components/header"

import { Table } from "antd"

const { Column } = Table

class Home extends React.Component {
    state = {
      data: [
        {
          "_id": "5b346c49812fae295a017a77",
          "userName": "111111",
          "password": "$2a$10$PQGDfdqWxy8cqCzKlxMSNeOPbzqRZmj3DFzbp3Z5H66azH.JFzCN.",
          "create_time": "2018-06-28 13:04"
        },
        {
          "_id": "5b3494416750283b95b87b61",
          "userName": "111112",
          "password": "$2a$10$kMbyac4eBFCtxXj2y34x6.MOcFnPj9rhYuFeQC5j1N6YrOxZBhO.O",
          "create_time": "2018-06-28 15:54"
        },
        {
          "_id": "5b35e9bca70ac703d4d0838e",
          "userName": "111113",
          "password": "$2a$10$pvxPaPGNgmwOQInznW.bZO0iyK3M3Ov1/hsE5f8j1gqmumfu0kNua",
          "create_time": "2018-06-29 16:11"
        }

      ],
      loading: false,
      hasMore: true,
    };
    render() {
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

export default Home
