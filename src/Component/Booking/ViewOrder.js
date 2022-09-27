import axios from "axios";
import React from "react";
import Display from "./displayOrder";

const order = "http://localhost:9870/posts"

class ViewOrder extends React.Component {
  constructor() {
    super()
    let email = sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',') : []

    this.state = {
      orders: "",
      email: email
    }
  }

  render() {
    return (
      <div>
        <Display OrderData={this.state.orders} />
      </div>
    )
  }

  componentDidMount() {
    axios.get(`${order}?email=${this.state.email}`).then((res) => { this.setState({ orders: res.json }) })
  }

}

export default ViewOrder