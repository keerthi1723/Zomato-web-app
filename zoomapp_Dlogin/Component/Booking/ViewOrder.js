// import axios from "axios";
import React from "react";
import Display from "./displayOrder"

const order = "http://localhost:9870/posts"

class ViewOrder extends React.Component {
  constructor(){
    super()

    this.state = {
      orders: "",
    }
  }
  render() {
    return (
      <div>
       <Display OrderData={this.state.orders} />
      </div>
    )
  }
  componentDidMount(){

    fetch(order, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ orders: data })
    }

    )
    .catch((error) => {
      console.log(error)
    })
}


    // axios.get(`${order}`).then((res) => {this.setState({orders:res.json})})
  // }
}

export default ViewOrder