import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {}
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        home
      </div>

    )
  }
}


export default Home

