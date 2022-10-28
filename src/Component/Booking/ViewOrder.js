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
    if(this.props.location){
      console.log("inside ifff")
      let query = this.props.location.search.split('&');
      if(query){
          let data={
              "status":query[0].split('=')[1],
              "date":query[2].split('=')[1],
              "bank_name":query[3].split('=')[1]
          }
          let id = query[1].split('=')[1].split('_')[1];
          fetch(`${order}/${id}`,{
              method:'PATCH',
              headers:{
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify(data)
          })
      }
  }
    axios.get(`${order}?email=${this.state.email}`).then((res) => { console.log("response", res) 
    this.setState({ orders: res.data }) })
  }

}

export default ViewOrder