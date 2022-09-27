import React from "react";
import { Link } from "react-router-dom";

const userInfo = "https://developerjwt.herokuapp.com/api/auth/userinfo"


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            user: ""
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('rtk');
        this.props.history.push('/')
    }
    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === 'Admin'){
                return(
                    <Link to="/user" className="btn btn-success">user</Link>
                ) 
            }
        }
    }
    
    render() {
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return (
            <>
                <div className="">
                    <div className="row">
                        <div className="container">
                            <div className="panel px-3 py-3" style={{ backgroundColor: "grey" }}>
                                <div className="panel-heading">
                                    <h3>Profile</h3>
                                </div>
                                <div className="panel-body mt-5">

                                    <h3>Hi {this.state.user.name}</h3>
                                    <h3>Your Phone is  {this.state.user.phone}</h3>
                                    <h3>Your Email is {this.state.user.email}</h3>
                                    <h3>Your Role is {this.state.user.role}</h3>
                                    {this.conditionalRender()} &nbsp;
                                    <button className="btn btn-danger mt-3" onClick={this.handleLogout}>LogOut</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }

    componentDidMount() {
        fetch(userInfo, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })

            .then((res) => res.json())
            .then((data) => {
                this.setState({ user: data })
            })
    }

}

export default Login