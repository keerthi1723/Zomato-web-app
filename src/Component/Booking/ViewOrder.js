import axios from "axios";
import React from "react";
import Display from "./displayOrder";

const order = "http://localhost:9870/posts"

class ViewOrder extends React.Component {
  constructor() {
    super()
    let sessionData = sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',') : []

    this.state = {
      orders: "",
      email: sessionData ? sessionData[1]:''
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
    axios.get(`${order}?email=${this.state.email}`).then((res) => { console.log("response", res) 
    this.setState({ orders: res.data }) })
  }

}

export default ViewOrder