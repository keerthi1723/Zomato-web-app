import React from "react";
// import "./placeOrder.css"

const mUrl = "https://developerjwt.herokuapp.com/api/auth/register";


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
        fetch(mUrl, {
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
            <div className="">
                <div className="row">
                    <div className="container">
                        <div className="panel px-3 py-3" style={{ backgroundColor: "lightGreen" }}>
                            <div className="panel-heading">
                                <h3>Register</h3>
                            </div>
                            <div className="panel-body mt-5">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Name</label>
                                            <input className="form-control" name="name" onChange={this.handleChange}
                                                value={this.state.name} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Email</label>
                                            <input className="form-control" name="email" onChange={this.handleChange}
                                                value={this.state.email} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Password</label>
                                            <input className="form-control" name="address" onChange={this.handleChange}
                                                value={this.state.password} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" onChange={this.handleChange}
                                                value={this.state.phone} />
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