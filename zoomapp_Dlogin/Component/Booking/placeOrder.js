import React from "react";
import "./placeOrder.css"

const mUrl = "http://zomatoajulypi.herokuapp.com/menuItem";
const order = "http://localhost:9870/posts"

class placeOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Math.floor(Math.random() * 10000),
            hotel_name: this.props.match.params.restName,
            name: "keerthi",
            email: "keerthi@gmail.com",
            phone: 8500619127,
            address: "yrt 45/88",
            menuItem: "",
        }
    }
    renderItem = (data) => {
        if (data) {
            return data.map((item) => {
                return <div className="orderItems">
                    <img src={item.menu_image} alt={item.menu_name} />
                    <p> {item.menu_name} - Rs.{item.menu_price} </p>
                </div>
            })
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(order, {
            method: 'POST',
            headers: {
                'accept': "application/json",
                'content-Type': "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(this.props.history.push(`/ViewOrder`))
    }
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="container">
                        <div className="panel px-3 py-3">
                            <div className="panel-heading">
                                <h3>Your Order Form Restaurant {this.state.hotel_name}</h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="row">
                                        <input type="hidden" name="cost" value={this.state.cost} />
                                        <input type="hidden" name="id" value={this.state.id} />
                                        <input type="hidden" name="hotel_name" value={this.state.hotel_name} />

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
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" onChange={this.handleChange}
                                                value={this.state.phone} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Address</label>
                                            <input className="form-control" name="address" onChange={this.handleChange}
                                                value={this.state.address} />
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        {this.renderItem(this.state.menuItem)}
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Total Price is Rs: {this.state.cost}</h2>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.handleClick}>CheckOut</button>
                </div>
            </div>
        )
    }
    // calling a api
    componentDidMount() {
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(mUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + Number(item.menu_price);
                    return 'ok'
                })
                this.setState({ menuItem: data, cost: totalPrice })
            }
            )
    }
}

export default placeOrder