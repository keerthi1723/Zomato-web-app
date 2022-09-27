// import axios from "axios";
import React from "react";
import UserDisplay from "./UserDisplay"

const userUrl = "https://developerjwt.herokuapp.com/api/auth/users"

class User extends React.Component {
  constructor(){
    super()

    this.state = {
    users: "",
    }
  }
  render() {
    if(sessionStorage.getItem('ltk') === null){
      this.props.history.push('/')
  }
  if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
    this.props.history.push('/profile')

  }
    return (
      <div>
       <UserDisplay usersData={this.state.users} />
      </div>
    )
  }
  componentDidMount(){

    fetch(userUrl, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ users: data })
    }

    )
    .catch((error) => {
      console.log(error)
    })
}


    // axios.get(`${order}`).then((res) => {this.setState({orders:res.json})})
  // }
}

export default User