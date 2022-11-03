import React from "react";
import "./Register.css"

const rUrl = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'keerthi',
            email: "keerthi@gmail.com",
            phone: 8500619127,
            password: '12345678'
        }
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(rUrl, {
            method: 'POST',
            headers: {
                'accept': "application/json",
                'content-Type': "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(this.props.history.push(`/`))
    }
    render() {
        return (
            <div className="mt-5">
                <div className="row">
                    <div className="container">
                        <div className="panel px-3 py-3" style={{ backgroundColor: "#CB916B" }}>
                            <div className="panel-heading">
                                <h3 className="text-white">Register</h3>
                            </div>
                            <div className="panel-body mt-5">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Name</label>
                                            <input className="form-control" name="name" onChange={this.handleChange}
                                                value={this.state.name} id="control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Email</label>
                                            <input className="form-control" name="email" onChange={this.handleChange}
                                                value={this.state.email} id="control1" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Password</label>
                                            <input className="form-control" name="address" onChange={this.handleChange}
                                                value={this.state.password} id="control2" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="text-white">Phone</label>
                                            <input className="form-control" name="phone" onChange={this.handleChange}
                                                value={this.state.phone} id="control3" />
                                        </div>
                                    </div>
                            </div>
                    <button className="btn btn-success" onClick={this.handleClick}>Register</button>

                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
    
}

export default Register