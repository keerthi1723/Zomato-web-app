import React from "react";
// import "./placeOrder.css"

const mUrl = "https://developerjwt.herokuapp.com/api/auth/login";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "keerthi@gmail.com",
            password: '12345678',
            message: ''
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
            .then((res) => res.json())
            .then((data) => {
                if(data.auth === false){
                    this.setState({message:data.token})
                } else {
                    sessionStorage.setItem('ltk',data.token)
                    this.props.history.push('/Profile')
                }
            })
    }
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="container">
                        <div className="panel px-3 py-3" style={{ backgroundColor: "lightpink" }}>
                            <div className="panel-heading">
                                <h3>Login</h3>
                            </div>
                            <div className="panel-body mt-5">
                                <h3 style={{ color: "red" }}>{this.state.message}</h3>
                                <div className="row">
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

                                </div>

                            </div>
                            <button className="btn btn-success" onClick={this.handleClick}>Login</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

    

}

export default Login